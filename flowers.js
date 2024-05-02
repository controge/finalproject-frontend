let flowers =[];
let host = getHost();
async function getAll(){
    let response = await fetch(host+"/flowers");
    let result = await response.json();
    console.log(result);
    return(result);
}

async function listFlowers(){
    if(flowers.length == 0){
        flowers = await getAll();
    }
    let flowerContainer = document.getElementById("flowers");
    flowerContainer.innerHTML = "";

    for(let flower of flowers){
        console.log(flower.id);
        let id = flower.id;
        let name = flower.name;
        let cost = flower.cost;
        let type = document.getElementById("flowertype").value;
        let occasion = document.getElementById("occasion").value;
        let color = document.getElementById("color").value;
        console.log("type = ", type);
        console.log("occasion = ", occasion);
        console.log("color = ", color);
        if((type == "default" || flower.type == type) && 
            (occasion == "default" || flower.occasion == occasion) &&
            (color == "default" || flower.color == color)){
            let card = document.createElement("div");
            card.classList.add('card');
            //store flower data in card
            card.setAttribute("id", id);
            card.setAttribute("name", name);
            card.setAttribute("cost", cost);
            console.log(`img src = "${host}/flowers/${id}/image" style = "width: 100%; height: 175px">`);
            card.innerHTML = `<div class = "card-inner">
                                <div class = "card-face">
                                    <img src = "${host}/flowers/${id}/image" style = "width: 100%">
                                    <p>${name}</p>
                                    <div> from <b> $${cost}</b></div>
                                </div>
                            </div>`;
            card.addEventListener('click', function(){
                cardClick(this);
            });
            flowerContainer.appendChild(card);
        }
    }

}

async function cardClick(card){
    let id = card.getAttribute("id");
    let name = card.getAttribute("name");
    let cost = card.getAttribute("cost");
    localStorage.setItem('flowerId', id);
    localStorage.setItem('flowerName', name);
    localStorage.setItem('flowerCost', cost);
    window.location.href= "order.html";
}
function gotoBasket(event){
    event.preventDefault();
    let dateInput = document.getElementById("deliveryDate");
    let date = dateInput.value;
    localStorage.setItem('deliveryDate', date);
    
    window.location.href = "basket.html";
}
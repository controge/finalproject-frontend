function gotoBasket(event){
    event.preventDefault();
    let form = document.forms[0];
    let formData = new FormData(form);
    let data = Object.fromEntries(formData);
    window.location.href = "basket.html";
}
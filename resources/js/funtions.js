function openDialog() {

    const dialog = document.getElementById("dialogo");

    dialog.showModal();
}

function closeDialog() {

    const dialog = document.getElementById("dialogo");

    dialog.close();
}

function redirectToCards() {
    generateCards()
    window.location.replace("http://127.0.0.1:5500/cards.html");
}

function generateCards() {
    fetch('./resources/json/cards.json').
    then((response) => response.json()).
    then((json) => cacharJson(json)).
    catch((exception) => console.log(exception));
}

function cacharJson(json){
    const title = document.getElementById("title-card");
    const content = document.getElementById("content-card");
   // var jsonObj = JSON.parse(json);
console.log(json[0].cards[0].id);
var arr = json[0].cards;
   

arr.forEach(element => {
    console.log(element.id);
   });

   title.textContent = "Title "+json[0].cards[0].id;
}
const buttonDisplay = document.getElementById("btn-display");
const buttonHide = document.getElementById("btn-hide");
const toysList = document.getElementById("toys-list");

//Cacher ou afficher

function displayToysList() {
    console.log('Display !');
    toysList.style = "display : block";
}
function hideToysList() {
    console.log('Hide !');
    toysList.style = "display : none";
}
buttonDisplay.addEventListener("click", displayToysList);
buttonHide.addEventListener("click", hideToysList);
const buttonRemove= document.getElementById("btn-remove");
const buttonAdd = document.getElementById("btn-add");
const compteur = document.getElementById("compteur");

function addNumber() {
    // compteur.innerHTML++;
    const nombre = Number(compteur.innerHTML);
    compteur.innerHTML = `${nombre + 1}`;
}

function removeNumber() {
    compteur.innerHTML--;
    if(compteur.innerHTML <= 0) {
        compteur.innerHTML = 0;
    }
}

buttonAdd.addEventListener("click", addNumber);
buttonRemove.addEventListener("click", removeNumber);
console.log(compteur.innerHTML);

const reset = document.getElementById("btn-reset");

function resetNumber() {
    compteur.innerHTML = 0;
}

reset.addEventListener('click', resetNumber);
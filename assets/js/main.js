function pintar(color){
    colorear = document.querySelector(".pintado");
    colorear.style.backgroundColor = color;
}

function agregarBordes(elementId){
    let elemento = document.querySelector('#' + elementId);
    elemento.style.border = "solid 1px black";
}




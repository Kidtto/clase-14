'use strict';
//Seleccionar por id
///let parrafo1 = document.getElementById('parrafo1');
//console.log(parrafo1);

//Seleccion por name
let parrafo2 = document.getElementsByName("parrafo2");
console.log(parrafo2);
//Seleccion por class
let parra3 = document.getElementsByClassName("parra3");
console.log(parra3);
//Selector Query selector usado para seleccionar tanto por id class o selector( por id es #),(por class es .)
const parrafo1 = document.querySelector("#parrafo1");
const elemnteEtiqueta = document.querySelector("h1");
const elementClass = document.querySelector(".ejemplo")
console.log(elementClass );

//seleccion de todos los elementos
const todosp = document.querySelectorAll("p");
//console.log(todosp);
/**function print(){
    const valor = document.getElementById("edad").value;
    alert("La edad es"+valor);
}*/
const print = () =>{
    const valor = document.getElementById("edad").value;
    alert("La edad es"+valor);
}
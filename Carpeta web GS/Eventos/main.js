'use strict';
// generado por html
function notaspromedio(){
    promedio()
};
//Mediante propiedad
const btnPropiedad = document.getElementById("btn2");
btnPropiedad.onclick = function(){
    promedio()
}
// metodo addEventListener
 
const btnAdd = document.getElementById("btn3");
btnAdd.addEventListener("click",function(){
    promedio();
})
//Metodo para el calculo del promedio
const promedio = () =>{
    let cantNotas = prompt("Introduzca la cantidad de notas");
    if (!isNaN(parseInt(cantNotas))){
        let nota= 0;
        let sumaNotas = 0;
        for(let i = 1; i <= cantNotas; i++){
            nota = prompt("Introduzca la nota No:"+i);
            sumaNotas +=(parseFloat(nota));
        }
         let promedio = sumaNotas/cantNotas;
         alert("El promedio es:" + promedio.toFixed(1));
    }else{
        alert ("El valor es invalido");
    }

    
}
'use strict'
import{ validateString, validateAvarage } from"./valedate.js";
import {pintarcard,agregarEstudiante} from"./pintar.js";

const btnAgregar = document.querySelector("#btn");
const btnMostra = document.querySelector("#btnMostrar");

// propiedad y con .addEventeListener
btnAgregar.addEventListener("click",() => {
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const promedio = document.querySelector("#promedio").value;
    const opcion = document.querySelector("#opcion").value;
     

    if(validateString(nombre)&&validateString(apellido) && opcion !="0"){
        if (!isNaN(parseFloat(promedio)) && (validateAvarage(promedio))){
            agregarEstudiante(nombre, apellido, promedio);
            console.log("Validado")
            modalAlerta("Estudiante agregado")
        }else{
            modalAlerta("Error de promedio");
            console.log("Error promedio");
        }
    }else{
        modalAlerta("Error de datos");
        console.log("Error de datos");
    }
    


}); 
btnMostra.addEventListener("click", function(){
    pintarcard("ESTUDIANTE")
});
function modalAlerta(cadena){
    const alerta =document.createElement("div");
    const texto = document.createElement("p");
    texto.setAttribute("class","textAlerta");
    alerta.setAttribute("id","alerta");
    alerta.setAttribute("class","alerta");
    texto.innerHTML =`<stronge>${cadena}</stronge>`;
    alerta.appendChild(texto);
    document.body.appendChild(alerta);
    alerta.onclick = function(){
        document.getElementById("alerta").remove();
    }


}

'use strict';
const cardsEstudiantes = document.querySelector("#cardsEstudiantes");
const estudiante= [];
const pintarcard =(tipo) =>{
    tipo = tipo.toUpperCase();
    const fragmento = document.createDocumentFragment();
    const templateestudiante = document.querySelector("#templateEstudiante").content;
    if ( tipo === "ESTUDIANTE"){
        for(let i of estudiante){ 
            const cloneTemp = templateestudiante.cloneNode(true);
            cloneTemp.querySelector(".title-card").innerHTML = "<stronge>DATOS DEL ESTUDIANTE </stronge>";
            cloneTemp.querySelector(".data-card").innerHTML= `NOMBRES:${
                i.nombre.toUpperCase()
                 } APELLIDO : ${i.apellido.toUpperCase()}`;
                 cloneTemp.querySelector(".text-aprobado").innerHTML = `${
                    aprobar(i.promedio)
                 }`;
                 fragmento.appendChild(cloneTemp);
        }
    }
    cardsEstudiantes.appendChild(fragmento);

}
 const aprobar= (nota) =>{
    let result = (nota >= 3 && nota <=5)? "Aprobado": "Reprobado";
    return result;
 }
const agregarEstudiante = (name,lastName,avg)=>{
    let persona = {
        nombre: name,
        apellido: lastName,
        promedio: avg
    };
    estudiante.push(persona);
    console.log(estudiante);
}
export { pintarcard, agregarEstudiante};
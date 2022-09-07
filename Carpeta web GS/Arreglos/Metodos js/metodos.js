'use strict';
// volver una cadena  a arreglo
let cadenaDias = "Lunes_Martes_Miercoles_Jueves_Viernes_abado_Domingo";
let miArray = cadenaDias.split("_");
console.log(miArray);
//Buscar si no encuentra el valor devuelve un undefined
// Funcion anonima o tipo flechar  y clsivs fuction(){}
const result = miArray.find((e)=>e  === " Viernes" );


const index = miArray.findIndex((e)=>e  === " Viernes");
console.log(index)
//3. Comprueba si existe un elemento dentro de un array true o false
console.log(miArray.includes("Viernes9"));
//4. filtrar elementos
let miArray2=[];
for( let i=0; i<25; i++) {
 miArray2[i]= i + 3;
} 
const response = miArray2.filter((e)=> e % 2 ===           0);
console.log(response);
//Map , some, every ,reduce,Concat,

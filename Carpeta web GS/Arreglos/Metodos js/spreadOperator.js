'use strict';
let miArray2=[];
for( let i=0; i<25; i++) {
 miArray2[i]= i + 3;
} 
const response = miArray2.filter((e)=> e % 2 === 0);
console.log(response);
//Spread Operator ...

// Agregar elementos a un arreglo
 miArray2.push(3,78,900,1200);
 console.log(... miArray2);
let  miArray3 = [... miArray2,34,88,3450];
console.log(...miArray3);

let resultado = miArray2.concat(miArray3);
console.log(...resultado);
let arrayFinal= [...miArray2, ...miArray3, ...resultado];
console.log(arrayFinal);
//Propagacion en un funcion


let lenguajes =['PHP','Java','JS','Ruby','C#','C++'];
const printLenguajes =(len1,len2,len3="Assembles",...len4)=>{
 console.log(`**Los lenguajes top** ${len1},${len2},${len3},${len4}**`);

}
printLenguajes(...lenguajes,'Cobol','F#');
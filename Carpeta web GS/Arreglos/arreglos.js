'use strict';
let miarreglo=[2,4,2,5,43,54,true,`78`,"hola mundo"];
let arreglo2= new Array(10,21,43,54);
miarreglo.push(56);
//miarreglo=[2,4,2,5,43,54,true,`78`,"hola mundo"];

for(let i=0;i<miarreglo.length;i++){
    console.log(miarreglo[i]);

}
//variaciones del for
for(  let j of arreglo2){
    console.log(j);

}
for(  let j in arreglo2){
    console.log(arreglo2[j]);

}
arreglo2.forEach((e)=>{
    console.log(e);

});
arreglo2.forEach(function(e)){
    console.log(e);
};



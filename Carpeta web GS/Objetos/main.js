'use strict';
//1. objeto literal de JavaScript
let sebastian = {
  nombre: 'Sebastian',
  apellido: 'Gomez',
  edad: 18,
  Altura: 1.70,
  peso: 55,6
  // metodos
caminar:  function(){
    return 'yo camino';
  },
hablar:  function(){
    return 'yo hablo';
}
}
//console.log(sebastian);
console.log(sebastian.nombre,sebastian.apellidos);
console.log(sebastian.caminar())
//Iteraciones
// Forma 1
Object.values(sebastian).forEach((e)) => console.log((e)) ;

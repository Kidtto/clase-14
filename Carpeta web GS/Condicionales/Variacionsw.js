
let calificacion;
calificacion = 3.0;
let mensaje;
mensaje = "";
 switch(true){
    case  calificacion  >= 0 && calificacion <= 2.9:
    // Template String
    mensaje = `Insumificiente la calificacion: ${calificacion}`;
    break;
     case calificacion >= 3.0 && calificacion <= 3.5:
     mensaje = `Nota regular: ${calificacion}` ;
     break;
    case calificacion >= 3.6 && calificacion <= 4.0 :
        mensaje = `Sobre saliente: ${calificacion}` ;
        break;
        case calificacion >= 4.6 && calificacion <= 5.0 :
            mensaje = `Nota sobre expectacular: ${calificacion}` ;
            break;
    default:
        mensaje = `La calificacion no puede ser procesada : ${calificacion}`;
        break;

 
 }
 console.log(mensaje);

    

  

 
  
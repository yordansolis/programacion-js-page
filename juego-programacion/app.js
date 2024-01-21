// -> document.querySelector| Obtiene el objeto h1 del DOM
/*@let $title = document.querySelector('h1'); */
/*@$title.innerHTML = 'Juego del numero secreto'; */

// -> innerHTML | Modifica el contenido HTML
/*@let $parrafo = document.querySelector('p');
/*@$parrafo.innerHTML = 'Indica un numero del 1 al 10'; */

//------------------------------------------------------------

let numeroSecreto = 0;
let intentos = 0;
let listaDeGenerado = [];
let numeroMaximo = 10;

// function que optimiza el proceso y es mejor segun las practicas
function asignarTextoElemento(elemento, texto) {
    let $elementoHTML = document.querySelector(elemento);
    $elementoHTML.innerHTML = texto;
    return;
}



function verificarIntentoUsuario() {

    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario == numeroSecreto) {
        asignarTextoElemento('p', `Felicidades, adivinaste el numero en ${intentos}  ${intentos == 1 ? 'vez' : 'veces'}`);

        // remover juego y quitar desable
        document.querySelector('#reiniciar').removeAttribute('disabled');


    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');

        }
    }
    intentos = intentos + 1;
    limpiarCaja();
    return;

}


function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}


function getNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random() * numeroMaximo) + 1;

    //Caso Base para detener la funciòn recursiva: 
    if (listaDeGenerado.length == numeroMaximo) {
        asignarTextoElemento('p', 'No hay mas intentos');
    }else{
        if (listaDeGenerado.includes(numeroGenerado)) {
            // llamamos la misma funcion para que no se repita
            return getNumeroSecreto();
        }else{
           return listaDeGenerado.push(numeroGenerado);
        }
    }
    //si el numero generado esta en la lista
}




function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al  ${numeroMaximo}`);
        //gurdar aleatorio
        numeroSecreto = getNumeroSecreto();
        // inicilizar el numero de intentos
        intentos = 1;
}


function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    
    //Indicar mensaje de intertento     
     condicionesIniciales();   

    // deshabilitar el boton de juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');



}

condicionesIniciales();

// function parametroUsuario(numeroUsuario){
//     let resivirNumero =  parseInt(numeroUsuario);

//     let suma = resivirNumero * parseInt(numeroUsuario);
//     return suma;
// }

// parametroUsuario(2);
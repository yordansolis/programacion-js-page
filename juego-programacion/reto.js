// Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.


/*
Bajo peso: IMC menor a 18.5
Peso normal: IMC entre 18.5 y 24.9
Sobrepeso: IMC entre 25 y 29.9
Obesidad: IMC de 30 o más
*/

function indiceMasaCorporal(altura, peso) {
    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        return "Bajo peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidad";
    }
}
indiceMasaCorporal(1.82, 72);


// Crea una función que calcule el valor  del factorial de un número pasado como parámetro.
function factorialNumero(numero) {
    //Por ejemplo, 5! = 5.4.3.2.1 = 120

    if (numero < 1) {
        return console.log('Error, no se puede mandar un numero menor');        
    }
    else{
        if(numero === 0 || numero === 1 ){
            return 1;
        }
        else{
            let resultado = 1;
            for (let index = 2; index <= numero; index++) {
                resultado *= index;
            }
            return resultado;
        }
    }
}
factorialNumero(5);

/*
Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

*/

function convertidorPesos(dolares ){   

    let tasaDeCambio = 3908;
    let totalConvertido = tasaDeCambio * dolares;
    return totalConvertido;

}
convertidorPesos(10)



let lista = [];

lista.push('c++', 'php', 'djando rest');

let lenguajesDeProgramacion = ['Java', 'Ruby', 'GoLang'];


function elementosLista(elemento) {

    let valor = parseInt(elemento);

    console.log(`
    lenguaje: 
     ${lenguajesDeProgramacion[valor] ? lenguajesDeProgramacion[valor] : lenguajesDeProgramacion[lenguajesDeProgramacion.length - 1]}`
     );

    console.log(`
    Los lenguajes de programación son ${lenguajesDeProgramacion.length}
    `);

    for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
        console.log(lenguajesDeProgramacion[i]);
    }
}


elementosLista(6);
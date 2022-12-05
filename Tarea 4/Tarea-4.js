const $botonCalcular = document.getElementById('calcular');

const numeros = document.querySelectorAll('li');
const listadoDeNumeros = obtenerNumeros();
const promedios = calcularPromedios(listadoDeNumeros);
const numeroMayor = mostrarMayor(listadoDeNumeros);
const numeroMenor = mostrarMenor(listadoDeNumeros);
const masRepetido = mostrarReptido(listadoDeNumeros);

const $promedio = document.getElementById('promedio');
const $menor = document.getElementById('pequeño');
const $mayor = document.getElementById('grande');
const $repetido = document.getElementById('repetido');


function obtenerNumeros (){
    const numerosTotales = [];
    for (let i = 0; i < numeros.length; i++){
        numerosTotales.push(Number(numeros[i].innerText))
    }
    return numerosTotales;
}

console.log(listadoDeNumeros);

function calcularPromedios(listadoDeNumeros) {
    let sum = 0;
    for (let i = 0; i < listadoDeNumeros.length; i++) {
        sum += listadoDeNumeros[i];
    }
    return sum / listadoDeNumeros.length;
}
console.log(promedios);

function mostrarMayor(listadoDeNumeros){
    let mayor = listadoDeNumeros[0];
    for(let i = 0; i < listadoDeNumeros.length; i++){
        if(listadoDeNumeros[i] > mayor){
            mayor = listadoDeNumeros[i];
        }
    }
    return mayor;
}
console.log(numeroMayor);

function mostrarMenor(listadoDeNumeros){
    let menor = listadoDeNumeros[0];
    for(let i = 0; i < listadoDeNumeros.length; i++){
        if(listadoDeNumeros[i]< menor){
            menor = listadoDeNumeros[i];
        }
    }
    return menor;
}

console.log(numeroMenor);

function mostrarReptido(listadoDeNumeros){
    let repetido = listadoDeNumeros[0];
    for(let i = 0; i < listadoDeNumeros.length; i++){
        for(let j = i + 1; j <listadoDeNumeros.length; j++){
            if (listadoDeNumeros[i] === listadoDeNumeros[j]){
                repetido = listadoDeNumeros[j]
            }
        }
    }
    return repetido;
}
console.log(masRepetido);

$botonCalcular.onclick = function(){
    $promedio.innerText = promedios;
    $menor.innerText = numeroMenor;
    $mayor.innerText = numeroMayor;
    $repetido.innerText = masRepetido;
}
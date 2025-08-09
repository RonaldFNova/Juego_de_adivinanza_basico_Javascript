let numeroAleatorio;
let intentos = [];
let botonReset;
let intentosCantidad
let numero
let p
let cantidadBoton = true;

document.addEventListener("DOMContentLoaded", function (){
    numeroAleatorio = Math.trunc(Math.random() * 100);
})

function ValoresPorDefecto(){
    botonReset = document.createElement("button");
    botonReset.textContent = "Reiniciar";
    intentosCantidad = document.createElement("p");
    console.log(numeroAleatorio);
    numero = document.getElementById("numeroEntrada").value;
    p = document.getElementById("Mensaje");
}

function Comprobar()
{
    if (cantidadBoton){
        ValoresPorDefecto();
    }

    if (numero == ""){
        p.textContent = "numero incorrecto intente con otro";
    }
    else if (numero > numeroAleatorio){
        p.textContent = "numero es mas pequeño";
        intentos.push(numero);
    }
    else if (numero < numeroAleatorio) {
        p.textContent = "numero es mas grande";
        intentos.push(numero);
    }
    else{
        p.textContent = "numero correcto";
        intentosCantidad.textContent = "el total de intentos que te tomó fue de : " + (intentos.length + 1);
        document.getElementById("Mensaje").appendChild(intentosCantidad)
        document.getElementById("prueba").appendChild(botonReset);
        cantidadBoton = false
    }
    
    botonReset.addEventListener("click", function(){
        numeroAleatorio = Math.trunc(Math.random() * 100);
        botonReset.remove();
        p.textContent = "";
        intentosCantidad.remove();
        cantidadBoton = true;
    })
    

}
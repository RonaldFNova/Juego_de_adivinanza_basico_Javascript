let numeroAleatorio;
let intentos = [];
let botonReset;
let intentosCantidad;
let numero;
let p;
let cantidadBoton = true;
let historial;

document.addEventListener("DOMContentLoaded", function (){
    numeroAleatorio = Math.trunc(Math.random() * 100);
    historial = document.createElement("p");
    document.getElementById("Historial").appendChild(historial);
    p = document.getElementById("Mensaje");
    
});

function ValoresPorDefecto(){
    botonReset = document.createElement("button");
    botonReset.textContent = "Reiniciar";
    intentosCantidad = document.createElement("p");
    console.log(numeroAleatorio);
    numero = document.getElementById("numeroEntrada").value;
}

function Comprobar()
{
    if (cantidadBoton){
        ValoresPorDefecto();
    }

    if (numero == ""){
        p.textContent = "numero invalido intente con otro";
        p.style.color = "red";
    }
    else if(numero > 100 || numero <= 0)
    {
        p.textContent ="El numero excede los valores permitidos"
        p.style.color = "black";
    }
    else if (numero > numeroAleatorio){
        p.textContent = "El numero es mas pequeño";
        p.style.color = "red";
        intentos.push(numero);
        historial.textContent = "Numeros ingresados: " + intentos;
    }
    else if (numero < numeroAleatorio) {
        p.textContent = "El numero es mas grande";
        p.style.color = "red";
        intentos.push(numero);
        historial.textContent = "Numeros ingresados: " + intentos;

    }
    else{
        p.textContent = "numero correcto";
        p.style.color = "green";
        intentosCantidad.textContent = "el total de intentos que te tomó fue de : " + (intentos.length + 1);
        intentosCantidad.style.color = "green";
        document.getElementById("Mensaje").appendChild(intentosCantidad);
        document.getElementById("prueba").appendChild(botonReset);
        historial.textContent = "Numeros ingresados: " + intentos;
        cantidadBoton = false;
    }
    
    botonReset.addEventListener("click", function(){
        numeroAleatorio = Math.trunc(Math.random() * 100);
        botonReset.remove();
        p.textContent = "";
        intentosCantidad.remove();
        cantidadBoton = true;
        intentos.length = 0;
        historial.textContent = "";
    });

}
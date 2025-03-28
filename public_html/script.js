let pantalla = document.getElementById('pantalla');
let operadorActual = '';
let primerNumero = '';
function agregarNumero(){
    pantalla.value += numero;
    
}

function agregarOperador(operador){
    primerNumero = pantalla.value;
    operadorActual = operador;
    pantalla.value = '';
    
}

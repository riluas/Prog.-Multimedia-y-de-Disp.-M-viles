// Escribe una rutina de código que pida un número del 1 al 12 al usuario y lo valide.
// Mientras el número no sea válido, deberá volver a pedirlo, avisando del problema con
// un mensaje de alerta con el error descriptivo. Cuando sea válido, se debe llamar a una
// función que simule una tirada de un dado de 12. Si el usuario acierta el número que 
// sale en el dado, se le debe lanzar un mensaje con una felicitación. De lo contrario,
// debe lanzar un mensaje que lo anime a volver a intentarlo.

let num = prompt("Dime un número del 1 al 12");

while (num < 1 || num > 12) {
    alert("El número introducido no es válido");
    num = prompt("Dime un número del 1 al 12");
}

function dado(nUsur) {
    let numDado = Math.floor(Math.random() * (1, 12) + 1)

    if (nUsur == numDado) {
        alert("Felicidades has sacado el mismo número");
    }
    else{
        alert("Ohh, no has sacado el mismo número, prueba otra vez :)");
    }
}

dado(num);

// Declarando variable de tipo array, que almacenará los nombres de los amigos secretos.
let amigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada.
    let nuevoAmigo = document.getElementById('amigo').value;

    // Validar la entrada.
    if (nuevoAmigo == '') {
        alert('Por favor, inserte un nombre.');
    } else {
        // Actualizar el array de amigos.
        amigos.push(nuevoAmigo);
        // Limpiar el campo de entrada.
        document.querySelector('#amigo').value = ''; //document.getElementById('amigo').value = '';
    }
    return;
}
// Declarando variable de tipo amigos, que almacenará los nombres de los amigos.
let amigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada.
    let nuevoAmigo = document.getElementById('amigo').value;

    // Validar la entrada.
    if (nuevoAmigo == '') {
        alert('Por favor, inserte un nombre.');
    } else {
        // Actualizar el amigos de amigos.
        amigos.push(nuevoAmigo);
        actualizarListaDeAmigos();
        // Limpiar el campo de entrada.
        document.querySelector('#amigo').value = ''; //document.getElementById('amigo').value = '';
    }
    return;
}

function actualizarListaDeAmigos() {
    // Obtener el elemento de la lista <ul>.
    let listaUlHtml = document.getElementById('listaAmigos');
    // Limpiar la lista existente.
    listaUlHtml.innerHTML = '';
    // Iterar sobre el arreglo.
    for (let i = 0; i < amigos.length; i++) {
        // Crear elemento de lista <li>, para cada amigo.
        let elementoIlHtml = document.createElement('li');
        elementoIlHtml.textContent = amigos[i]
        // Agregar elementos(amigos) a la lista <ul>.
        listaUlHtml.appendChild(elementoIlHtml);
    }
    return;
}
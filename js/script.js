let containerItems = document.getElementById('container-items');
// Agrego una escucha a el evento submit en el formulario
document.getElementById('container-form').addEventListener('submit', addItem);
// Verifico si no tengo ya un array con informacion en el LocalStorage, si ya hay un array lo obtengo para no sobreescribilo y si hay nada creo un array vacio.
const activities = JSON.parse(localStorage.getItem('tareas')) || [];

function addItem(e) {
    // Cancelo el comportamiento por default, para que no se refresque la pagina al dar submit
    e.preventDefault();
    // Obtengo el valor de los campos y los almaceno en variables
    let title = document.getElementById('titulo').value;
    let description = document.getElementById('descripcion').value;
    // Creo el objeto donde voy a almacenar los valores
    const activity = {
        title: title,
        description: description
    };
    // Pusheo el objeto al array
    activities.push(activity);
    // Lo seteo en el LocaStorage con JSON para que lo convierta en un string
    localStorage.setItem('tareas', JSON.stringify(activities));
    // Llamo a la funcion que imprime los elementos
    createElement(title, description);
};
function populate() {
    activities.forEach(activity => {
        createElement(activity.title, activity.description);
    });
}
populate();

function createElement (title, description){
    // Creo el contenido que voy a imprimir en pantalla
    let div = document.createElement("DIV");
    let contenidoText = document.createTextNode(title + " - " + description);
    console.log(contenidoText);
    // Imprimo en pantalla el contenido
    div.appendChild(contenidoText);
    div.className = 'divItems';
    containerItems.appendChild(div);
};

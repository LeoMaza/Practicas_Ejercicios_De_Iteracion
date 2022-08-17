const ANIO_ACTUAL = 2022;
const ANIO_MIN_LISTA = 1922;
const ANIO_MAX_LISTA = 2004;

let nombreRecibido = "Nombre por def";
let anioRecibido = "anio por def"


// for para generar la lista de años a la lista

for (let opcionAnio = ANIO_MAX_LISTA; opcionAnio >= ANIO_MIN_LISTA; opcionAnio--) {
    //Agregamos una opcion de Año a la lista

    document.querySelector("#lista_anios").innerHTML += `
    <option> ${opcionAnio}</option>`;

}

function calcularEdad() {
    let nombreRecibido = document.querySelector("#nombre").value;
    let anioRecibido = document.querySelector("#lista_anios").value;
    let edad = "edad def";

    edad = ANIO_ACTUAL - anioRecibido;

    document.querySelector("#respuesta").innerHTML = `
    <h2>${nombreRecibido} tenes ${edad} años.</h2>`
}
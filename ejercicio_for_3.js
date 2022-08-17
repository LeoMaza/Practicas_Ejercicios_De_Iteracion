

let numSelected = "num por def";

function generar() {
    numSelected = document.querySelector("#numSelected").value;
    document.querySelector("#respuesta").innerHTML=
    ``;
    for (let i = 0; i < numSelected; i++) {

       document.querySelector("#respuesta").innerHTML+=
        `<h2>Hola</h2>`;
        
    }

   
   
    }





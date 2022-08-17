let selectList = "img por def";

function generar() {
    selectList = document.querySelector("#imgSelected").value;
    document.querySelector("#respuesta").innerHTML =
        ``;
    for (let i = 0; i < selectList; i++) {

        document.querySelector("#respuesta").innerHTML +=
            `<img src="https://i.blogs.es/544e7d/650_1000_javascript_logo/450_1000.png" alt="">`;

    }



}
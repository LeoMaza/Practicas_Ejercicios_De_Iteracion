let selectList = "list por def";

function generar() {
    selectList = document.querySelector("#selectList").value;
    document.querySelector("#select_list").innerHTML =
        ``;

    for (let i = 0; i < selectList; i++) {
        if (i == 0) {
            document.querySelector("#select_list").innerHTML +=
                `
            <option value="0">Seleccione..</option>`;

        }
        else {
            document.querySelector("#select_list").innerHTML +=
                `
            <option value="">opcion ${i}</option>`;

        }

    }





}
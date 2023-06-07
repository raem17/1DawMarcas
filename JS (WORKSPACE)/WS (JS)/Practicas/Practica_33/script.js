var form = document.querySelector("#finalForm");
var inputNombre = document.querySelector("#nombre");
var inputCorreo = document.querySelector("#correo");
var inputHombre = document.querySelector("#hombre");
var inputMujer = document.querySelector("#mujer");
var inputTyC = document.querySelector("#TyC");

// ul y li: las advertencias al usuario
var ul = document.querySelector("#ulList");
var liNombre = document.querySelector("#liNombre");
var liCorreo = document.querySelector("#liCorreo");
var liSex = document.querySelector("#liSex");
var liTyC = document.querySelector("#liTyC");

function validarForm(event) {
    event.preventDefault();

    if (isBlank(inputNombre.value) || isBlank(inputCorreo.value) || (inputMujer.checked == false && inputHombre.checked == false) || inputTyC.checked == false) {
        ul.classList.remove("noError");

        if(isBlank(inputNombre.value)) {
            liNombre.classList.remove("noError");
        } else {
            liNombre.classList.add("noError");
        }

        if(isBlank(inputCorreo.value)) {
            liCorreo.classList.remove("noError");
        } else {
            liCorreo.classList.add("noError");
        }

        if (inputMujer.checked == false && inputHombre.checked == false) {
            liSex.classList.remove("noError");
        } else {
            liSex.classList.add("noError");
        }

        if(inputTyC.checked == false) {
            liTyC.classList.remove("noError");
        } else {
            liTyC.classList.add("noError");
        }

    } else {
        ul.classList.add("noError");
    }

}

function isBlank(value){      
    return !value || !value.toString().trim() || /^[\s\b\0]+$/.test(value.toString());
}

form.addEventListener("submit", validarForm);
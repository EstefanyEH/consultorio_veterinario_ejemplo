import Propietario from "./Propietario.js";
import Animal from "./Animal.js";
import Mascota from "./Mascota.js";




let formulario = document.querySelector(`form`);

formulario.addEventListener(`submit`, (event) => {
    event.preventDefault();
    let propietario = document.getElementById(`propietario`).value;
    let telefono = document.getElementById(`telefono`).value;
    let direccion = document.getElementById(`direccion`).value;
    let nombreMascota = document.getElementById(`nombreMascota`).value;
    let tipo = document.getElementById(`tipo`).value;
    let enfermedad = document.getElementById(`enfermedad`).value;

    let mascota = new Mascota(tipo, propietario, direccion, telefono, nombreMascota, enfermedad)
    mascota.datosPropietario();
    mascota.datosMascota();

})
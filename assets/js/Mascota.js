import Animal from "./Animal.js";

export default class Mascota extends Animal {
    constructor(tipo, propietario, direccion, telefono, nombreMascota, enfermedad) {
        super(tipo, propietario, direccion, telefono)
        this._nombreMascota = () => nombreMascota;
        this._enfermedad = () => enfermedad;
    }

    get nombreMascota() {
        return this._nombreMascota();
    }

    set nombreMascota(new_nombreMascota) {
        return this._nombreMascota = () => new_nombreMascota;
    }

    get enfermedad() {
        return this._enfermedad();
    }

    set enfermedad(new_enfermedad) {
        return this._enfermedad = () => new_enfermedad;
    }

    datosMascota() {
        document.getElementById(`datos_mascota`).innerHTML = `El tipo de animal es un: ${this.tipo}, mientras que el nombre de la mascota es: ${this.nombreMascota} y la enfermedad es: ${this.enfermedad}  `
    }
}
export default class Propietario {
    constructor(propietario, direccion, telefono) {
        this._propietario = () => propietario;
        this._direccion = () => direccion;
        this._telefono = () => telefono;
    }

    get propietario() {
        return this._propietario();
    }

    set propietario(new_propietario) {
        return this._propietario = () => new_propietario
    }

    get direccion() {
        return this._direccion();
    }

    set direccion(new_direccion) {
        return this._direccion = () => new_direccion
    }

    get telefono() {
        return this._telefono();
    }

    set telefono(new_telefono) {
        return this._telefono = () => new_telefono
    }

    datosPropietario() {
        document.getElementById(`datos_propietario`).innerHTML = `El nombre del dueño es: ${this.propietario}. El domicilio es: ${this.direccion}, y el número de contacto es: ${this.telefono}`
    }
}
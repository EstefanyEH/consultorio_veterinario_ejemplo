import Propietario from "./Propietario.js";

export default class Animal extends Propietario {
    constructor(tipo,propietario,direccion,telefono){
        super(propietario,direccion,telefono)
        this._tipo = ()=>tipo
    }

    get tipo(){
        return this._tipo();
    }

    set tipo (new_tipo){
        return this._tipo = ()=>new_tipo;
    }

    tipoAnimal(){
        console.log(`El tipo de animal es un: ${this.tipo}`)
    }
}
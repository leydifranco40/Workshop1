import { Direccion } from "./direccion"
import { Vehiculo } from "./vehiculo"
import { EstadoCivil } from "./estadoCivil"


export class Persona{
    nombre: string
    private edad: number
    direccion:Direccion
    vehiculos: Vehiculo[]
    estadoCivil: EstadoCivil

    constructor(nombre:string, edad:number, direccion: Direccion, vehiculos: Vehiculo[], estadoCivil:EstadoCivil){
        this.nombre = nombre
        this.edad = edad
        this.direccion = direccion
        this.vehiculos = vehiculos
        this.estadoCivil = estadoCivil
    }

    getEdad():number{
        return this.edad

    }
    
    saludar():void{
        console.log(`Hola!, tu nombre es: ${this.nombre}, tienes ${this.getEdad()} años y vives en ${this.direccion.ciudad}` )
    }

    anadirVehiculos(vehiculo: Vehiculo){
        this.vehiculos.push(vehiculo)

    }

}

 



   

    

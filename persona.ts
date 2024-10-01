import { Direccion } from "./direccion"
import { Vehiculo } from "./vehiculo"


export class Persona{
    nombre: string
    private edad: number
    direccion:Direccion
    vehiculos: Vehiculo[]

    constructor(nombre:string, edad:number, direccion: Direccion, vehiculos: Vehiculo[]){
        this.nombre = nombre
        this.edad = edad
        this.direccion = direccion
        this.vehiculos = vehiculos
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

 



   

    

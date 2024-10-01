import { Direccion } from "./direccion"


export class Persona{
    nombre: string
    private edad: number
    direccion:Direccion

    constructor(nombre:string, edad:number, direccion: Direccion){
        this.nombre = nombre
        this.edad = edad
        this.direccion = direccion
    }

    getEdad():number{
        return this.edad

    }
    
    saludar():void{
        console.log(`Hola!, tu nombre es: ${this.nombre}, tienes ${this.getEdad()} años y vives en ${this.direccion.ciudad}` )
    }

}

 



   

    

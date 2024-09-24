export class Persona{
    nombre: string
    edad: number

    constructor(nombre:string, edad:number){
        this.nombre = nombre
        this.edad = edad
    }
    saludar(){
        console.log(`Tu nombre es: ${this.nombre} y tienes ${this.edad} años ` )
    }
}

const persona1 = new Persona("Santiago", 29)
persona1.saludar()
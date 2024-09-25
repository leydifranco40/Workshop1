export class Persona{
    nombre: string
    private edad: number

    constructor(nombre:string, edad:number){
        this.nombre = nombre
        this.edad = edad
    }

    getEdad():number{
        return this.edad

    }
    
    saludar():void{
        console.log(`Hola!, tu nombre es: ${this.nombre} y tienes ${this.getEdad()} años ` )
    }

}

const persona1 = new Persona("Santiago", 29)
persona1.saludar()


   

    

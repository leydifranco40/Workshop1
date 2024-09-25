import { Persona } from "./persona"


export class Empleado extends Persona{
    salario: number

    constructor(nombre:string, edad:number, salario:number){
        super(nombre, edad)
        this.salario = salario
    }
trabajar(horas:number){
    console.log(`El empleado ${this.nombre} trabaja ${horas} horas al día` )
}

saludar(): void {
    console.log(`Hola! ${this.nombre}, tu edad es ${this.getEdad()} y el salario es de: ${this.salario} `)
}
}
const Empleado1 = new Empleado ("Andres", 30, 2000)
Empleado1.saludar()
Empleado1.trabajar(8)
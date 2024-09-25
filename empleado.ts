import { Direccion } from "./direccion"
import { Persona } from "./persona"


export class Empleado extends Persona{
    salario: number

    constructor(nombre:string, edad:number, salario:number, direccion:Direccion){
        super(nombre, edad, direccion)
        this.salario = salario
    }
trabajar(horas:number){
    console.log(`El empleado ${this.nombre} trabaja ${horas} horas al día` )
}

saludar(): void {
    console.log(`Hola! ${this.nombre}, tu edad es ${this.getEdad()} el salario es de: ${this.salario} y vives en ${this.direccion.ciudad}`)
}
}


import { Persona } from "./persona"


class Empleado extends Persona{
    salario: number

    constructor(nombre:string, edad:number, salario:number){
        super(nombre, edad)
        this.salario = salario
    }
trabajar(horas:number){
    console.log(`El empleado ${this.nombre} trabaja ${horas} horas al día` )
}

}
const Empleado1 = new Empleado ("Andres", 30, 2000)
Empleado1.trabajar(8)
import { Direccion } from "./direccion"
import { EstadoCivil } from "./estadoCivil"
import { Persona } from "./persona"
import { Vehiculo } from "./vehiculo"
import { Proyecto } from "./proyecto"


export class Empleado extends Persona{
    salario: number
    proyectos:Proyecto[]

    constructor(nombre:string, edad:number, salario:number, direccion:Direccion, vehiculos:Vehiculo[], estadoCivil:EstadoCivil, proyectos:Proyecto[]){
        super(nombre, edad, direccion, vehiculos, estadoCivil,)
        this.salario = salario
        this.proyectos = proyectos
       
    }
trabajar(horas:number){
    console.log(`El empleado ${this.nombre} trabaja ${horas} horas al día` )
}

saludar(): void {
    console.log(`Hola! ${this.nombre}, tienes ${this.getEdad()} años, tu salario es de: ${this.salario},  vives en ${this.direccion.ciudad} y tu Estado Civil es ${this.estadoCivil} `)
}

asignarProyecto(proyecto:Proyecto): void{
    this.proyectos.push(proyecto) 

    }

mostarProyectos(): void{
    this.proyectos.forEach(proyecto => {
    console.log(`Proyecto: ${proyecto.nombre}`)
})


}

}

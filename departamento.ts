import { Empleado } from "./empleado";


export class Departamento{
    nombre: string
    empleados: Empleado[]=[]

    constructor (nombre:string){
    this.nombre = nombre
    }

    anadirEmpleados(empleado:Empleado):void{
        this.empleados.push(empleado)

    }

    eliminarEmpleados(nombre:string):void{
        this.empleados = this.empleados.filter(emp => emp.nombre !== nombre)

    }

    listarEmpleados():void{
        
            console.log(`Empleados en el departamento de ${this.nombre}:`)
            this.empleados.forEach(empleado =>{
            console.log(` - ${empleado.nombre}, salario: ${empleado.salario}`)
        })

    }
}
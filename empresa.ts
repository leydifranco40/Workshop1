import { Empleado } from "./empleado";
export class Empresa {
    empleados :Empleado[] = []

    agregarEmpleado(empleado:Empleado): void{
        this.empleados.push(empleado)
}

    eliminarEmpleado(nombre:string): void{
        this.empleados = this.empleados.filter(empleado => empleado.nombre !== nombre)
    }
    totalSalarios(): number{
        return this.empleados.reduce((total, empleado)=> total + empleado.salario,0)
   
}   
}
import { Empleado } from "./empleado"

export class Proyecto{
    nombre:string
    empleado: Empleado[]=[]

    constructor(nombre:string){
        this.nombre = nombre
    }
    
    agregarEmpleado(empleado: Empleado) {
        this.empleado.push(empleado);
    }

    imprimirInformacion() {
        console.log(`Proyecto: ${this.nombre}`);
        console.log("Empleados asignados:");

        this.empleado.forEach((emp, index) => {
            console.log(`Empleado ${index + 1}: ${emp.nombre}, Salario: ${emp.salario}`);
        });
    }
}
import {Persona} from "./persona"
import {Empleado} from "./empleado"
import { Direccion } from "./direccion"
import { Coche, Moto, Vehiculo } from "./vehiculo"
import { EstadoCivil } from "./estadoCivil"
import { Proyecto } from "./proyecto"



const direccion1: Direccion = {calle:"calle 20 # 45",ciudad:"Rionegro", pais:"Colombia" }
const direccion2: Direccion = {calle:"calle 50 # 10",ciudad:"Medellin", pais:"Colombia" }
const direccion3: Direccion = {calle:"calle 10 # 11",ciudad:"Cali", pais:"Colombia" }
const direccion4: Direccion = {calle:"calle 5 # 12",ciudad:"Barranquilla", pais:"Colombia" }
const direccion5: Direccion = {calle:"calle 13 # 20",ciudad:"Cartagena", pais:"Colombia" }
const direccion6: Direccion = {calle:"calle 8 # 9",ciudad:"Pasto", pais:"Colombia" }
const direccion7: Direccion = {calle:"calle 10 # 15",ciudad:"Santa Marta", pais:"Colombia" }
const direccion8: Direccion = {calle:"calle 9 # 10",ciudad:"Bogota", pais:"Colombia" }
const direccion9: Direccion = {calle:"calle 45 # 66",ciudad:"Pereira", pais:"Colombia" }
const direccion10:Direccion = {calle:"calle 66 # 145",ciudad:"Yopal", pais:"Colombia"}

const personas:Persona[] = [
    new Persona ("Juan", 18, direccion1, [],EstadoCivil.SOLTERO ),
    new Persona("Andres", 20, direccion2, [], EstadoCivil.CASADO),
    new Persona("Daniel", 25, direccion3, [], EstadoCivil.SOLTERO),
    new Persona("Marcela", 18, direccion4, [], EstadoCivil.SOLTERO),
    new Persona("Sebastian", 30, direccion5, [], EstadoCivil.VIUDO),
    new Persona("Manuela", 40, direccion6, [], EstadoCivil.DIVORCIADO),
    new Persona("Leydi", 27, direccion7, [], EstadoCivil.SOLTERO),
    new Persona("Cristian", 19, direccion8, [], EstadoCivil.DIVORCIADO),
    new Persona("Sara", 15, direccion9, [], EstadoCivil.VIUDO),
    new Persona("Camila", 18, direccion10, [], EstadoCivil.DIVORCIADO),
]

console.log("----PERSONAS----")
personas.forEach(persona => persona.saludar())

const coche1 = new Coche()
const coche2 = new Coche()
const moto1 = new Moto()
const moto2 = new Moto()

const proyecto1 = new Proyecto("Desarrollo de software Backend")
const proyecto2 = new Proyecto("Bases de datos")
const proyecto3 = new Proyecto("Desarrollo de sofware Frontend")
const proyecto4 = new Proyecto("Requerimientos")
const proyecto5 = new Proyecto("Arquitectura de Software")
const proyecto6 = new Proyecto("Desarrollo de software Backend")
const proyecto7 = new Proyecto("Desarrollo de software Backend")
const proyecto8 = new Proyecto("Desarrollo de sofware Frontend")
const proyecto9 = new Proyecto("Bases de datos")
const proyecto10 = new Proyecto("Diagrama de clases")

const empleados:Empleado[] = [
    new Empleado("Juan", 18, 2000,direccion1, [coche1], EstadoCivil.SOLTERO, [proyecto1]),
    new Empleado("Andres", 25,2500, direccion2, [coche1], EstadoCivil.DIVORCIADO, [proyecto2]),
    new Empleado("Daniel", 25, 3500, direccion3, [coche2], EstadoCivil.DIVORCIADO, [proyecto3]),
    new Empleado("Marcela", 18, 2000, direccion4, [coche2], EstadoCivil.DIVORCIADO, [proyecto4]),
    new Empleado("Sebastian", 30, 5000, direccion5, [moto1], EstadoCivil.VIUDO, [proyecto5]),
    new Empleado("Manuela", 36, 5400, direccion6, [moto1], EstadoCivil.VIUDO, [proyecto6]),
    new Empleado("Leydi", 27, 4500, direccion7, [moto2],  EstadoCivil.VIUDO, [proyecto7]),
    new Empleado("Cristian", 19, 3000, direccion8, [moto2], EstadoCivil.VIUDO, [proyecto8]),
    new Empleado("Sara", 15, 2200, direccion9, [moto2],  EstadoCivil.VIUDO,[proyecto9]),
    new Empleado("Camila", 18, 2000, direccion10, [moto2], EstadoCivil.SOLTERO, [proyecto10]),
]



console.log("----EMPLEADOS----")
empleados.forEach(empleado => {
    empleado.saludar()

    console.log("Vehículos del empleado:");
    empleado.vehiculos.forEach(vehiculo => {
        vehiculo.arrancar()
    })
    console.log("Proyectos asignados: ")
    empleado.proyectos.forEach(proyecto =>{
        console.log(`- ${proyecto.nombre}`)

})
console.log("--------------")

})
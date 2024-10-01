import {Persona} from "./persona"
import {Empleado} from "./empleado"
import { Direccion } from "./direccion"
import { Vehiculo } from "./vehiculo"



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
    new Persona ("Juan", 18, direccion1, []),
    new Persona("Andres", 20, direccion2, []),
    new Persona("Daniel", 25, direccion3, []),
    new Persona("Marcela", 18, direccion4, []),
    new Persona("Sebastian", 30, direccion5, []),
    new Persona("Manuela", 40, direccion6, []),
    new Persona("Leydi", 27, direccion7, []),
    new Persona("Cristian", 19, direccion8, []),
    new Persona("Sara", 15, direccion9, []),
    new Persona("Camila", 18, direccion10, []),
]

console.log("----PERSONAS----")
personas.forEach(persona => persona.saludar())


const empleados:Empleado[] = [
    new Empleado("Juan", 18, 2000,direccion1, []),
    new Empleado("Andres", 25,2500, direccion2, []),
    new Empleado("Daniel", 25, 3500, direccion3, []),
    new Empleado("Marcela", 18, 2000, direccion4, []),
    new Empleado("Sebastian", 30, 5000, direccion5, []),
    new Empleado("Manuela", 36, 5400, direccion6, []),
    new Empleado("Leydi", 27, 4500, direccion7, []),
    new Empleado("Cristian", 19, 3000, direccion8, []),
    new Empleado("Sara", 15, 2200, direccion9, []),
    new Empleado("Camila", 18, 2000, direccion10, []),
]
console.log("----EMPLEADOS----")
empleados.forEach(empleado => empleado.saludar())
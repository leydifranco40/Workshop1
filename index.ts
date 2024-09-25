import {Persona} from "./persona"
import {Empleado} from "./empleado"

const personas:Persona[] = [
    new Persona("Juan", 18),
    new Persona("Andres", 20),
    new Persona("Daniel", 25),
    new Persona("Marcela", 18),
    new Persona("Sebastian", 30),
    new Persona("Manuela", 40),
    new Persona("Leydi", 27),
    new Persona("Cristian", 19),
    new Persona("Sara", 15),
    new Persona("Camila", 18),

]

personas.forEach(persona => persona.saludar())


const empleados:Empleado[] = [
    new Empleado("Juan", 18, 2000),
    new Empleado("Andres", 25,2500),
    new Empleado("Daniel", 25, 3500),
    new Empleado("Marcela", 18, 2000),
    new Empleado("Sebastian", 30, 5000),
    new Empleado("Manuela", 36, 5400),
    new Empleado("Leydi", 27, 4500),
    new Empleado("Cristian", 19, 3000),
    new Empleado("Sara", 15, 2200),
    new Empleado("Camila", 18, 2000),
]

empleados.forEach(empleado => empleado.saludar())
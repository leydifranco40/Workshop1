import {Persona} from "./persona"

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

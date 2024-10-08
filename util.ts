import { Persona } from "./persona";
import { Direccion } from "./direccion"; // Dirección es una interfaz
import { EstadoCivil } from "./estadoCivil";


const jsonApersona = (textoJson: string): Persona => {
    const objetoJson = JSON.parse(textoJson);  
    const { nombre, edad, direccion, vehiculos, estadoCivil } = objetoJson;
    return new Persona(nombre, edad, direccion, vehiculos, estadoCivil);  
};


const crearJsonPersona = () => {
    
    const personaJson = {
        nombre: "Juan",
        edad: 25,
        direccion: {
            calle: "Calle 30 - 10 -20",
            ciudad: "Bogota",
            Pais: "Colombia"
        }
    };
    const personaString = JSON.stringify(personaJson, null, 2);
    console.log("Cadena de texto JSON:");
    console.log(personaString);
    
    const persona = jsonApersona(personaString);

   
    persona.saludar();
};

// Ejecutar la función
crearJsonPersona();

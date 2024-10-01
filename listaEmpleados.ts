import { Empleado } from "./empleado"
import { Direccion } from "./direccion"
import { Vehiculo } from "./vehiculo";

const listaEmpleadosJSON = `
[
    {
        "nombre": "Andres",
        "edad": 28,
        "salario" : 2000,
        "direccion":{
            "calle": "calle 10",
            "ciudad": "Antioquia",
            "pais": "Colombia"
        }
    },
    {
        "nombre": "Santiago",
        "edad": 30,
        "salario" : 2500,
        "direccion":{
            "calle": "calle 20",
            "ciudad": "Bogota",
            "pais": "Colombia"
        }
    },
    {
        "nombre": "Sofia",
        "edad": 19,
        "salario" : 3000,
        "direccion":{
            "calle": "calle 40",
            "ciudad": "Cali",
            "pais": "Colombia"
        }
    },
    {
        "nombre": "Mariana",
        "edad": 35,
        "salario" : 1000,
        "direccion":{
            "calle": "calle 35",
            "ciudad": "Nariño",
            "pais": "Colombia"
        }
    },
    {
        "nombre": "Fabian",
        "edad": 45,
        "salario" : 5000,
        "direccion":{
            "calle": "calle 26",
            "ciudad": "Santa Martha",
            "pais": "Colombia"
        }

    },
    {
        "nombre": "Diana",
        "edad": 22,
        "salario" : 2000,
        "direccion":{
            "calle": "calle 50",
            "ciudad": "Pereira",
            "pais": "Colombia"
        }
    },
    {
        "nombre": "Maria",
        "edad": 32,
        "salario" : 2500,
        "direccion":{
            "calle": "calle 22",
            "ciudad": "Antioquia",
            "pais": "Colombia"
        }
    },
    {
        "nombre": "Tomas",
        "edad": 32,
        "salario" : 4000,
        "direccion":{
            "calle": "calle 90",
            "ciudad": "Antioquia",
            "pais": "Colombia"
        }
    },
    {
        "nombre": "Viviana",
        "edad": 50,
        "salario" : 10000,
        "direccion":{
            "calle": "calle 65",
            "ciudad": "Cartagena",
            "pais": "Colombia"
        }
    }



]
`
const deserializarEmpleados = (json:string): Empleado[] => {
    const empleadosJson = JSON.parse(json)
    return empleadosJson.map((emp: any) => {
        const direccion: Direccion = {
            calle: emp.direccion.calle,
            ciudad: emp.direccion.ciudad,
            pais: emp.direccion.pais
        }
        return new Empleado(emp.nombre, emp.edad, emp.salario, emp.direccion, emp.Vehiculo);

    });
};

// Deserializando la lista de empleados
const empleados = deserializarEmpleados(listaEmpleadosJSON);

// Imprimir saludos de los empleados
empleados.forEach(empleado => empleado.saludar());


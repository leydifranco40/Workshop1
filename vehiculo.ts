export abstract class Vehiculo {

    abstract arrancar():void
}


export class Coche extends Vehiculo{

    arrancar(): void {
        console.log("El empleado tiene un carro")
    }
}

export class Moto extends Vehiculo{
    arrancar(): void {
        console.log ("El empleado tiene una moto")
    }
}
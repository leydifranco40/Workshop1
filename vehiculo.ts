export abstract class Vehiculo {

    abstract arrancar():void
}


export class Choche extends Vehiculo{

    arrancar(): void {
        console.log("El carro arranca acelerando con el pie")
    }
}

export class Moto extends Vehiculo{
    arrancar(): void {
        console.log ("La moto arranca acelerando con la mano")
    }
}
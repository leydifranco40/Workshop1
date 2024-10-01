abstract class Vehiculo {

    abstract arrancar():void
}


class Choche extends Vehiculo{

    arrancar(): void {
        console.log("El carro arranca acelerando con el pie")
    }
}

class Moto extends Vehiculo{
    arrancar(): void {
        console.log ("La moto arranca acelerando con la mano")
    }
}
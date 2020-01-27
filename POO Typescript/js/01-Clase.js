var bicicleta = {
    color: 'rojo',
    modelo: 'bmx',
    frenos: 'disco',
    velMaxima: '60 kmh',

    cambiaColor: function (nuevocolor) {
        this.color = nuevocolor;
    }
};

console.log(bicicleta);


bicicleta.cambiaColor(prompt("Cambio de color", ""))

console.log(bicicleta);
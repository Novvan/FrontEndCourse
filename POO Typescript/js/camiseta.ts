interface CamisetaBase{
    setColor(color);
    getColor();
}

function estapmar(logo:string) {
    return function (target: Function) {
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de: "+logo)
        }
    }
}

@estapmar('AFK')

class Camiseta implements CamisetaBase
{
    private color: string = "Azul";
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    public setColor(color){
        this.color=color;
    }
    public getColor(){
        return this.color;
    }

    constructor(color,modelo,marca,talla,precio){
      this.color = color;
      this.modelo = modelo;
      this.marca = marca; 
      this.talla = talla;
      this.precio = precio;  
    }
}

class Hoodie extends Camiseta{
    public capucha: boolean;

    setCapucha(capucha:boolean){
        this.capucha = capucha;
    }
    getCapucha(){
        return this.capucha;
    }
}





var sudadera = new Hoodie('negra','larga','nike','XL',20);
sudadera.setCapucha(true);

var camiseta = new Camiseta('rojo','corta','nike','M',12);
camiseta.estampacion();

var playera = new Camiseta('azul','corta','adidas','L',10);
console.log(camiseta,playera,sudadera);
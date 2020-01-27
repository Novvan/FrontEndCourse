var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function estapmar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de: " + logo);
        };
    };
}
var Camiseta = /** @class */ (function () {
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = "Azul";
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta = __decorate([
        estapmar('AFK')
    ], Camiseta);
    return Camiseta;
}());
var Hoodie = /** @class */ (function (_super) {
    __extends(Hoodie, _super);
    function Hoodie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hoodie.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Hoodie.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Hoodie;
}(Camiseta));
var sudadera = new Hoodie('negra', 'larga', 'nike', 'XL', 20);
sudadera.setCapucha(true);
var camiseta = new Camiseta('rojo', 'corta', 'nike', 'M', 12);
camiseta.estampacion();
var playera = new Camiseta('azul', 'corta', 'adidas', 'L', 10);
console.log(camiseta, playera, sudadera);

import { Injectable } from "@angular/core";
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService{
    public zapatillas: Array<Zapatilla>;
    
    
    constructor(){
        this.zapatillas = [
            new Zapatilla('Reebok clasic', 'Rebook', 'Blancas', 12, true),
            new Zapatilla('Mercurial', 'Nike', 'Gris', 35, true),
            new Zapatilla('Yeehze', 'Adidas', 'Negras', 50, false),
            new Zapatilla('Vaporfly', 'Nike', 'Gris', 30, true),
            new Zapatilla('Predator', 'Adidas', 'Rojas', 100, true),
      
          ];
    }
    getTexto(){
        return "Hola mundo servicio";
    }


    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }
}
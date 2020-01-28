import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
})

export class ZapatillasComponent implements OnInit{
  public title: string = 'Componente de zapatillas';
  public zapatillas: Array<Zapatilla>;
  public marcas: String[];
  public color: string;
  public mi_marca: string;

  constructor(){
    this.mi_marca = 'Fila';
    this.color = 'blue';
    this.marcas =new Array();
    this.zapatillas = [
      new Zapatilla('Reebok clasic', 'Rebook', 'Blancas', 12, true),
      new Zapatilla('Mercurial', 'Nike', 'Gris', 35, true),
      new Zapatilla('Yeehze', 'Adidas', 'Negras', 50, false),
      new Zapatilla('Vaporfly', 'Nike', 'Gris', 30, true),

    ];
  }
  ngOnInit(){
    console.log(this.zapatillas);
    this.getMarcas();
  }

  getMarcas() {
    this.zapatillas.forEach((zapatilla, index)=>{
      if(this.marcas.indexOf(zapatilla.marca)<0){
        this.marcas.push(zapatilla.marca);
      }
    });

    console.log(this.marcas);
  }

  getMarca(){
    alert(this.mi_marca);
  }
}

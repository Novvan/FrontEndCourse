import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  providers:[
    ZapatillaService,
  ]
})

export class ZapatillasComponent implements OnInit{
  public title: string = 'Componente de zapatillas';
  public zapatillas: Array<Zapatilla>;
  public marcas: String[];
  public color: string;
  public mi_marca: string;

  constructor(
    private _zapatillaService: ZapatillaService,
  ){
    this.mi_marca = 'Fila';
    this.color = 'blue';
    this.marcas =new Array();
    
  }

  ngOnInit(){
    this.zapatillas = this._zapatillaService.getZapatillas();
    this.getMarcas();
    //alert(this._zapatillaService.getTexto());
  }

  getMarcas() {
    this.zapatillas.forEach((zapatilla, index)=>{
      if(this.marcas.indexOf(zapatilla.marca)<0){
        this.marcas.push(zapatilla.marca);
      }
    });

    console.log(this.marcas);
  }

  addMarca(){
    this.marcas.push(this.mi_marca);
    alert("Marca añadida");
  }

  deleteMarca(value){
    this.marcas.splice(value, 1);
  }

  onBlur(){
    console.log("Has salido del input");
  }
}

import { configuracion } from './models/config';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = configuracion.titulo;
  public descripcion: string;
  public config;
  public mostrar_videojuegos: boolean = true;

  constructor(){
    this.config = configuracion;
    this.descripcion = configuracion.descripcion;
  }
  ocultarVideojuegos(value){
    this.mostrar_videojuegos = value;
  }
}

import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';


@Component({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html',
})

export class VideoJuegoComponent implements OnInit, DoCheck, OnDestroy{

  public title: string;
  public listado: string;

  constructor(){
    this.title = "Componente de videojuegos";
    this.listado = "Listado de los juegos mas populares"

    //console.log("Se ha cargado el componente: videojuego.component.ts");
  }

  ngOnInit(){
    //console.log("OnInit ejecutado");
  }

  ngDoCheck(){
    //console.log("DoCheck ejecutado");
  }

  cambiarTitulo(){
    this.title = "Nuevo titulo de componente";
  }

  ngOnDestroy(){
    // console.log("OnDestroy ejecutado");
  }

}

import { Component } from '@angular/core';


@Component({
  selector: 'videojuego',
  template: `
    <h2>Componente de videojuegos</h2>
    <ul>
      <li>GTA</li>
      <li>WITCHER</li>
      <li>TEKKEN</li>
      <li>MARIO</li>
    </ul>
  `,
})

export class VideoJuegoComponent{
  constructor(){
    console.log("Se ha cargado el componente: videojuego.component.ts");
  }
}

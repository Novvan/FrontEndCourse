import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externos',
  templateUrl: './externos.component.html',
  styleUrls: ['./externos.component.css'],
  providers:[
    PeticionesService,
  ],
})
export class ExternosComponent implements OnInit {

  public user: any;
  public userId: any;


  constructor(
    private _peticionesService: PeticionesService,
  ) {
    this.userId=1;
   }

  ngOnInit() {
    this.cargaUsuario();
  }

  cargaUsuario(){
    this._peticionesService.getUser(this.userId).subscribe(
      result =>{
        this.user = result.data;
      },
      error=>{
        console.log(<any>error);
      }
    );
  }
}

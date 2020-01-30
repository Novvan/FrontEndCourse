import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
import { format } from 'url';

@Component({
  selector: 'app-externos',
  templateUrl: './externos.component.html',
  styleUrls: ['./externos.component.css'],
  providers: [
    PeticionesService,
  ],
})
export class ExternosComponent implements OnInit {

  public user: any;
  public userId: any;
  public fecha: any;
  public new_user: any;

  constructor(
    private _peticionesService: PeticionesService,
  ) {
    this.userId = 1;
    this.new_user = {
      "name": "",
      "job": ""
    };
  }

  ngOnInit() {
    this.cargaUsuario();
    this.fecha = new Date(2020, 0, 29);
  }

  cargaUsuario() {
    this.user = false;
    this._peticionesService.getUser(this.userId).subscribe(
      result => {
        this.user = result.data;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onSubmit(form){
    this._peticionesService.addUser(this.new_user).subscribe(
      response => {
        console.log(response)
      },
      error =>{
        console.log(<any>error);
      }
    );
    form.reset()
  }
}

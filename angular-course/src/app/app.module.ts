import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { VideoJuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { routing, appRoutingProviders } from './app.routing';
import { ExternosComponent } from './externos/externos.component';
import { HttpClientModule } from '@angular/common/http';
import { CalculadoraPipe } from './pipes/calculadora.pipe';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    VideoJuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternosComponent,
    CalculadoraPipe,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

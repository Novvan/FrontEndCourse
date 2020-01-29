//Import de modulos
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import Components
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideoJuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';


//Array de rutas 
const appRoutes : Routes = [
{path:'', component:HomeComponent},
{path:'home', component:HomeComponent},
{path:'zapatillas', component:ZapatillasComponent},
{path:'cursos', component:CursosComponent},
{path:'videojuegos', component:VideoJuegoComponent},
{path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
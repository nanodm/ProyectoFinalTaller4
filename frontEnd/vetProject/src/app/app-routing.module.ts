import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { DueniosComponent } from './components/duenios/duenios.component';
import { DuenioComponent } from './components/duenio/duenio.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pacientes', component: PacientesComponent },
  { path: 'paciente/:id', component: PacienteComponent },  
  { path: 'duenios', component: DueniosComponent },
  { path: 'duenio/:id', component: DuenioComponent },
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

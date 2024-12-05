import { Routes } from '@angular/router';
import { MascotasComponent } from './mascotas/mascotas.component';
import { RegistroComponent } from './registro/registro.component';

export const routes: Routes = [
  { path: '', component: MascotasComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'mascotas', component: MascotasComponent },
  { path: 'adopciones', component: MascotasComponent },  
  { path: 'donaciones', component: MascotasComponent }
];

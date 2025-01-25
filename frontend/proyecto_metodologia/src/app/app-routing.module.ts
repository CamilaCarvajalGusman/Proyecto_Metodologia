import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { SelectTypeUserComponent } from './select_type_user.component';
import { IniciarSesionComponent } from './iniciar_sesion.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'select_type_user', component: SelectTypeUserComponent },
  { path: 'iniciar_sesion', component: IniciarSesionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

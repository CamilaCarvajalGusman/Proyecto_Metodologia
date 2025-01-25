import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { SelectTypeUserComponent } from './select_type_user.component';
import { IniciarSesionComponent } from './iniciar_sesion.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectTypeUserComponent,
    IniciarSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
// [_{{{CITATION{{{_2{Setting up HttpClient • Angular](https://angular.dev/guide/http/setup)
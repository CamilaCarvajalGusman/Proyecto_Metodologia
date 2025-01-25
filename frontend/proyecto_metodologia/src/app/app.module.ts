import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { SelectTypeUserComponent } from './select_type_user.component';
import { IniciarSesionComponent } from './iniciar_sesion.component';

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

import { NgModule } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
      ],
  providers: [
    provideHttpClient(),
    DataService],

  bootstrap: [AppComponent]
})
export class AppModule { }
// [_{{{CITATION{{{_2{Setting up HttpClient • Angular](https://angular.dev/guide/http/setup)
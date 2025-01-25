import { NgModule } from '@angular/core';
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
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
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
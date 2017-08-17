import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FotoDiariaService } from "./servicios/fotodiaria.service";
import { FotoDiariaComponent } from "./fotodiaria/fotodiaria.component";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    FotoDiariaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [FotoDiariaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

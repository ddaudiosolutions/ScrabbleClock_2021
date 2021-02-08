import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RelojComponent } from './reloj/reloj.component';
import { JugadorComponent } from './jugador/jugador.component';
import { VerificadorComponent } from './verificador/verificador.component';

@NgModule({
  declarations: [
    AppComponent,
    RelojComponent,
    JugadorComponent,
    VerificadorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Componente2Component } from './componente2/componente2.component';
import { Componente3Component } from './componente3/componente3.component';
import { Componente4Component } from './componente4/componente4.component';
import { Componente5Component } from './componente5/componente5.component';
import {AppRoutingModule} from './app-routing.module';
import {Servicio2Service} from './servicio2.service'


@NgModule({
  declarations: [
    AppComponent,
    Componente2Component,
    Componente3Component,
    Componente4Component,
    Componente5Component

  ],
  imports: [
    BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule
  ],
  providers: [
      Servicio2Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

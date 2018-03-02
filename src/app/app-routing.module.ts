import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent} from './app.component';
import { Componente2Component } from './componente2/componente2.component';
import {Componente3Component} from './componente3/componente3.component';
import {Componente4Component} from './componente4/componente4.component';
import {Componente5Component} from './componente5/componente5.component';

const routes: Routes = [
    { path: 'c2' , component: Componente2Component },
    { path:  'c3', component: Componente3Component},
    { path: 'c4',component:Componente4Component},
    { path: 'c5', component:Componente5Component},
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', component: AppComponent},
];

@NgModule({
  imports: [

      RouterModule.forRoot(
          routes,
          {
              useHash : true
          }
      )
  ],
    exports: [
        RouterModule
    ],
  declarations: []
})
export class AppRoutingModule { }

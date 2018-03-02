import { Component } from '@angular/core';
import {Servicio2Service}  from './servicio2.service';
@Component({
  selector: 'app-rootg',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public mensaje:string;
  public mejorjuegoretro:string;
  public juegoretro:string;
  public mostrarretro:boolean;
  public color:string;
  public edad:number;
  public carreras:Array<string>;

    constructor(
        public ser2:Servicio2Service
    ){


      this.mensaje="hola";
      this.mejorjuegoretro="Mortal Kombat xd";
      this.juegoretro="Tarzan en la selva";
      this.mostrarretro=true;
      this.color="yellow";
      this.edad=12;
      this.carreras=['Medicina','Derecho','Contabilidad','Administracion','Informatica','Minas'];


    }



     saludo (){
        alert("Hola mi Gente");
    }
}

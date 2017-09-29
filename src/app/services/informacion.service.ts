import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class InformacionService {
  
  info:any = {};
  equipo:any [] = [];
  cargada:boolean = false;
  cargada_sobre_nosotros: boolean = false;

  constructor(public http:Http) { 

   this.cargar_info();
   this.cargar_sobre_nosotros();

  }

  public cargar_info(){
    this.http.get('assets/data/info.pagina.json')
    .subscribe(data => { 
      this.info = data.json();
      this.cargada = true;
    })
  }

 public  cargar_sobre_nosotros(){
    this.http.get('https://portafolio-b551f.firebaseio.com/equipo.json').subscribe(data => {
      console.log(data.json());
      this.equipo=data.json();
      this.cargada_sobre_nosotros=true;
    })
 }
   
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  producto:any[]=[];
  cargando:boolean=true;
  constructor(private http:Http) { 

      this.cargar_productos();

  }

  public cargar_productos(){
    this.cargando=true;
    if(this.producto.length===0){
      this.http.get('https://portafolio-b551f.firebaseio.com/productos.json')
      .subscribe(data=>{
        console.log(data.json());
        this.producto=data.json();
        this.cargando=false;
      })
    }

  }

}

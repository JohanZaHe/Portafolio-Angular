import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  products:any[]=[];
  cargando:boolean=true;

  constructor(public http:Http) { 

      this.cargar_productos();

  }

  public cargar_productos(){
    this.cargando=true;
   if(this.products.length==0){
      this.http.get('https://portafolio-b551f.firebaseio.com/productos_idx.json')
      .subscribe(res => {
        setTimeout(()=>{
          this.products=res.json();
          this.cargando=false;
        },1500)
      });
    }

  }

}

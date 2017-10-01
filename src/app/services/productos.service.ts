import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  products: any[] = [];
  productos_filtrado: any[] = [];
  cargando: boolean = true;
  filtrando: boolean = true;

  constructor(public http: Http) {

    this.cargar_productos();

  }

  public cargar_productos() {
    this.cargando = true;
    let promesa = new Promise((resolve, reject) => {
      if (this.products.length == 0) {
        this.http.get('https://portafolio-b551f.firebaseio.com/productos_idx.json')
          .subscribe(res => {
            setTimeout(() => {
              this.products = res.json();
              this.cargando = false;
              resolve();
            }, 1500)
          });
      }
    })
    return promesa;
  }

  public cargar_producto(id: string) {
    return this.http.get('https://portafolio-b551f.firebaseio.com/productos/' + id + '.json')
  }

  public buscar_producto(termino: string) {
    
    this.filtrando=true;

    //console.log('Buscando Productos');
    //console.log(this.products.length);

    if (this.products.length === 0) {

      this.cargar_productos().then(() => {
        //Terminó la carga
        this.filtrar_productos(termino);
      });

    } else {

      this.filtrar_productos(termino);

    }

  }

  public filtrar_productos(termino: string) {
    
    this.productos_filtrado = [];

    termino =  termino.toLocaleLowerCase();

    this.products.forEach(prod => {
      if (prod.categoria.toLocaleLowerCase().indexOf(termino) >= 0 || prod.titulo.toLocaleLowerCase().indexOf(termino) >= 0) {
        this.productos_filtrado.push(prod);
        //console.log(prod);
      }
      //console.log(prod);
    })

    this.filtrando=false;
  }

}

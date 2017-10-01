import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService} from '../../services/productos.service';
import { InformacionService } from '../../services/informacion.service';
@Component({
  selector: 'app-item-portafolio',
  templateUrl: './item-portafolio.component.html'
})
export class ItemPortafolioComponent {

  producto:any=undefined;
  cod:string= undefined;
  anio:number=undefined;
  constructor(
    private route:ActivatedRoute, 
    private _ps:ProductosService,
    private _is:InformacionService
  ) { 

    route.params.subscribe(parametros =>{
      
      _ps.cargar_producto(parametros['id'])
      .subscribe( res =>{
        this.producto=res.json();
        this.cod=parametros['id'];
        console.log(this.producto);
      })
    })

    this.anio= new Date().getFullYear();

  }



}

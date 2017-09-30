import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-portafolio',
  templateUrl: './item-portafolio.component.html'
})
export class ItemPortafolioComponent {

  constructor(private route:ActivatedRoute) { 

    route.params.subscribe(parametros =>{
      console.log(parametros);
      console.log(parametros['id']);
    })
  }



}

import { Component } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
   anio: number; 
  constructor(public _is:InformacionService) { 
    this.anio=new Date().getFullYear();
  }

}

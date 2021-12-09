import { Component } from '@angular/core';
import { PaisInt } from '../../interfaces/pais-int'; 
import { PaisService } from '../../services/pais-serv.service'; 

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: []
})
export class PorCapitalComponent {

  cadena: string = '';
  error: boolean = false;
  paises: PaisInt[] = [];
  
  constructor(private paisService: PaisService) { }

  buscar( cadena: string ){
    this.error = false;
    this.cadena = cadena;

    this.paisService.buscarCapital(this.cadena)
      .subscribe( (paises) => {
        console.log(paises);
        this.paises = paises;
      }, (err) => {
        this.error = true;
        this.paises = [];
      });
  }
}

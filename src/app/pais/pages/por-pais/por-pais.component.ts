import { Component } from '@angular/core';
import { PaisService } from '../../services/pais-serv.service';
import { PaisInt } from '../../interfaces/pais-int'; 

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: []
})
export class PorPaisComponent {

  cadena: string = '';
  error: boolean = false;
  paises: PaisInt[] = [];


  constructor(private paisService: PaisService) { }

  buscar( cadena: string) {
    this.error = false;
    this.cadena = cadena

    this.paisService.buscarPais(this.cadena)
      .subscribe( (paises) => {
        console.log(paises);
        this.paises = paises;

      }, (err) =>{
        this.error = true;
        this.paises = [];
      });
  }

  sugerencias( cadena: string ){
    this.error = false;
  }
}
import { Component, OnInit, Input } from '@angular/core';
import { PaisInt } from '../../interfaces/pais-int';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: []
})
export class TablaComponent implements OnInit {

  @Input() paises: PaisInt[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}

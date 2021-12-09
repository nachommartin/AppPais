import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './input.component.html',
  styleUrls: []
})
export class PaisInputComponent implements OnInit{

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';


  cadena: string = '';

  ngOnInit():void {
  }

  buscar(){
    this.onEnter.emit( this.cadena );
  }

  
}


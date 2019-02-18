import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { fadeIn } from '../../animation';

@Component({
  selector: 'parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.scss'],
  animations: [ fadeIn ]
})
export class ParquesComponent implements OnInit{
  @Input () nombre: string;
  @Input () metros: number;
  public vegetacion: string;
  public abierto: boolean;

  @Output() getData = new EventEmitter

  constructor() {
    this.metros = 450;
    this.vegetacion = 'alta';
    this.abierto = true;
  }

  ngOnInit(){ }

  send() {
      this.getData.emit({
        'nombre': this.nombre,
        'metros': this.metros,
        'vegetacion': this.vegetacion,
        'abierto': this.abierto
      })
  }
}

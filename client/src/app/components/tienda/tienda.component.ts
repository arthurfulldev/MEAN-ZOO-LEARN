import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animation';

@Component({
  selector: 'tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss'],
  animations: [ fadeIn ]
})
export class TiendaComponent implements OnInit {
  public title: string = 'Esta es la tienda.';
  public nombreParque: string;
  constructor() { }

  ngOnInit() { }

  show(){
    console.log(this.nombreParque);
  }

  showParqueData(e){
      console.log(e)
  }
}

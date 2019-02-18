import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animation';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  animations: [ fadeIn ]
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

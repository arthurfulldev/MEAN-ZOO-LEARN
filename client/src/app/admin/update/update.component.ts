import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animation'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  animations: [ fadeIn ]
})
export class UpdateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

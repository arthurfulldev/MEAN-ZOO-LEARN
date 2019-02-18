import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animation';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [ fadeIn ]
})
export class ListComponent implements OnInit {
  mock = new Array(10)
  constructor() { }
  ngOnInit() {
  }
}

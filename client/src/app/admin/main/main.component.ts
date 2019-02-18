import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animation'

@Component({
	selector: 'main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
	animations: [fadeIn]
})
export class MainComponent implements OnInit {
	constructor() { }
	ngOnInit() { }
}

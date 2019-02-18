import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animation'

@Component({
	selector: 'animals',
	templateUrl: './animals.component.html',
	styleUrls: ['./animals.component.scss'],
	animations: [fadeIn]
})
export class AnimalsComponent implements OnInit {
	constructor() { }
	ngOnInit() {
	}
}

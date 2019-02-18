import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animation'

@Component({
	selector: 'app-delete',
	templateUrl: './delete.component.html',
	styleUrls: ['./delete.component.scss'],
	animations: [fadeIn]
})
export class DeleteComponent implements OnInit {
	constructor() { }
	ngOnInit() { }
}

import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animation';

@Component({
	selector: 'contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss'],
	animations: [ fadeIn ]
})
export class ContactComponent implements OnInit {
	public emailContacto: string;
	constructor() { }

	ngOnInit() {
	}

	guardarEmail() {
		localStorage.setItem('emailContacto', this.emailContacto);
	}

	closeSession() {
		localStorage.removeItem('emailContacto');
		localStorage.clear();
		this.emailContacto = null;
	}
}

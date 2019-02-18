import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck{
  title = 'Zoologico.';
  email: string;
  
  ngOnInit(){}

  ngDoCheck(){
    this.email = localStorage.getItem('emailContacto');
  }
}

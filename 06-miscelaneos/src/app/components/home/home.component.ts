import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
      <app-ng-style></app-ng-style>
      <hr>
      <hr>  
      <app-css></app-css>
      <p>Hola Mundo desde app.component</p>
      <hr>
      <app-clases></app-clases>

      <br><hr>
        <p appResaltado>Hola Mundo 1</p>  
        <p [appResaltado]="'orange'"> 
          Hola Mundo 2
        </p>

      <br><hr>
      <app-ng-switch></app-ng-switch>
      <br><hr>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

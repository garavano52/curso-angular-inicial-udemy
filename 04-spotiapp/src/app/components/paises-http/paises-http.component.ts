import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paises-http',
  templateUrl: './paises-http.component.html',
  styles: []
})
export class PaisesHTTPComponent implements OnInit {

  paises: any[] = [];

  constructor( private http:HttpClient ) {
    console.log('Constructor del Home');
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
        .subscribe( (resp:any) => {
          this.paises = resp;
          console.log(this.paises); 
        }) 
   }

  ngOnInit(): void {
  }

}

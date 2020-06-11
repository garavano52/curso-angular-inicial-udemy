import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre    :string  = 'alejandro GARAVANO VIotti';
  nombre2   :string  = 'aLEJanDRo GARAvano vIOTti';
  PI        :number  = Math.PI;
  porcentaje:number  = 0.234;
  salario   :number  = 1234.5;
  fecha     :Date    = new Date();
  activar   :boolean = false;
  videoUrl  :string  = 'https://www.youtube.com/embed/VdlPpTp7WyM';
  idioma    :string  = 'en';
  arreglo = [0,1,2,3,4,5,6,7,8,9,10];

  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 4500);
  } );
  
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }

}

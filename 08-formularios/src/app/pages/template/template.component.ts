import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Alejandro',
    apellido: 'Garavano',
    correo: 'alejandro@gmail.com',
    pais: 'ARG',
    genero: 'M'
  }

  paises: any[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.paisService.getPaises()
        .subscribe( paises => {
            this.paises = paises;
            this.paises.unshift({
              nombre: '[Seleccione País]',
              codigo: ''
            })
            // console.log(this.paises);
        }); 
  }

  guardar(formu:NgForm) {
    
    if (formu.invalid) {  
      console.log(formu);
      Object.values(formu.controls).forEach( 
        control => control.markAsTouched()
      );
      return 
    }

    console.log("Submit disparado");
    console.log(formu);
    console.log(formu.value);

  }

}

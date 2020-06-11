import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { HeroeModel } from '../../models/heroe.model';
import { HeroesService } from '../../services/heroes.service';
import Swal from 'sweetalert2';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();

  constructor( private heroeService:HeroesService,
               private route:ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if( id !== 'nuevo'  ) {
      this.heroeService.getHeroe(id)
          .subscribe( (resp:HeroeModel) => {
            this.heroe = resp;
            this.heroe.id = id;
          })
    }
    console.log(id);
  }

  guardar( form: NgForm ) {

    if( form.invalid) {
      console.log("Formulario No Válido");
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false
    })
    Swal.showLoading();

    let peticion: Observable<any>;

    if( this.heroe.id) {
      peticion = this.heroeService.actualizarHeroe(this.heroe);
    } else {
      peticion = this.heroeService.crearHeroe(this.heroe)
    }

    peticion.subscribe( resp => {
      Swal.fire({
        title: this.heroe.nombre,
        text: 'Se actualizó correctamente',
        icon: 'success'
      })
    });

    /* if( this.heroe.id) {
      this.heroeService.actualizarHeroe(this.heroe)
        .subscribe( resp => {
          console.log(resp);
        });
    } else {
      this.heroeService.crearHeroe(this.heroe)
        .subscribe( resp => {
          console.log(resp);
        });
    } */



    console.log(form);
    console.log(this.heroe);

  }

}

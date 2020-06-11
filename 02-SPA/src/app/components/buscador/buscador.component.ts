import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HeroesService } from '../../servicios/heroes.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = []
  termino:string;

  constructor(  private _heroesService:HeroesService,
                private activateRoute:ActivatedRoute,
                private router:Router ) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe( params => {
      /* console.log(params['termino'])  */
      this.termino = params['termino']
      this.heroes = this._heroesService.buscarHeroes(this.termino)
      console.log(this.heroes);
    })
  }

  verHeroe( idx:number ){
    this.router.navigate(['/heroe',idx]); 
  }


}

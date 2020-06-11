import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _heroesService:HeroesService,
               private router:Router
                ) {
    
    this.heroes = _heroesService.getHeroes();
    console.log(this.heroes);
  }

  ngOnInit() {
   
  }

  verHeroe( idx:number ){
    this.router.navigate(['/heroe',idx]); 
  }

}
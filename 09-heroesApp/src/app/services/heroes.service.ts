import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../models/heroe.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'https://login-app-8cdc7.firebaseio.com';

  constructor( private http:HttpClient) {
  }

  crearHeroe( heroe: HeroeModel) {
    return this.http.post(`${this.url}/heroes.json`, heroe)
               .pipe(
                 map( (resp:any) => {
                    heroe.id = resp.name;
                    return heroe
                 })
               );
  }

  actualizarHeroe(heroe: HeroeModel) {

    const heroeTemp = {
      ...heroe
    };

    delete heroeTemp.id;

    return this.http.put(`${this.url}/heroes/${heroe.id}.json`, heroeTemp);
  }

  getHeroes() {
    return this.http.get(`${this.url}/heroes.json`)
               .pipe(
                 map( this.crearArreglo),
                 delay(500)
               );
  }

  getHeroe( id: string ) {
    return this.http.get(`${this.url}/heroes/${id}.json`);
  }

  borrarHeroe( id: string ) {
    return this.http.delete(`${this.url}/heroes/${id}.json`);
  }

  private crearArreglo(heroesObj: object) {
    if ( heroesObj === null ) { return []; }

    const heroes:HeroeModel[] = [];     // Creo colección "heroes" con Objetos "Heroe"
    Object.keys(heroesObj).forEach( key => {         // Recorro las claves del objeto.
      const heroe: HeroeModel = heroesObj[key];      // Asigno el objeto de esa clave.
            heroe.id = key;
      heroes.push(heroe);                            // Agrego el objeto a la colección.
    });

    return heroes;
  }


}

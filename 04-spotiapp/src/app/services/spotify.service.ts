import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient ) { 
    console.log('Spotify service listo');
  }

  getQuery(query:string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQAGsOj8FCzmHHtaGtPDWk90gnHuXwqa0gby8z3n2IgsVEkBe92_3N3fOc8X1VWcliALil914aabrulYbMk'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases')
               .pipe( map( data => data['albums'].items ));     

    /* const headers = new HttpHeaders({
      'Authorization':'Bearer BQDauWoa_CFPZFkfvE8UZ0-_esbprRyLqxOFfpUybA3ounIW5kWL1wyKYyMBUi187YDQn1Unteok3CWrzgk'
    }) 
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
              .pipe( map( data => {
                  return data['albums'].items;
              }));     
    */  
  }

  getArtistas(termino:string) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
               .pipe( map( data => data['artists'].items ));

   /*  const headers = new HttpHeaders({
      'Authorization':'Bearer BQDauWoa_CFPZFkfvE8UZ0-_esbprRyLqxOFfpUybA3ounIW5kWL1wyKYyMBUi187YDQn1Unteok3CWrzgk'
    })

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, {headers})
               .pipe( map( data => data['artists'].items ));   // Si la función solo tiene una linea se puede optimizar.
  */
  } 

  getArtista(id:string) {
    return this.getQuery(`artists/${id}`);
  } 

  getTopTracks(id:string) {
    return this.getQuery(`artists/${id}/top-tracks?country=US`)
               .pipe( map( data => data['tracks'] ));
  } 



}

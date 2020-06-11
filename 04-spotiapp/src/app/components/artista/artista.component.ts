import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent{

  artista:any = {};
  topTracks:any[] = [];
  loadingArtist: boolean;
  loadingTopTrack:boolean;


  constructor( private router:ActivatedRoute,
               private spotify:SpotifyService  ) { 
    this.loadingArtist = true;
    this.loadingTopTrack = true;
    // Se usa ActivatedRoute para rescatar el parametro que viene por la URL, en éste caos el ID
    this.router.params.subscribe(  params => { 
      this.getArtista( params['id'] );
      this.getTopTracks( params['id'] );
        /* console.log(params['id'])  // Recupera el id de la URL;
        console.log(this.artista); */
     })

     
     
  }

  getArtista( id:string ) {
    this.loadingArtist = true;
    this.spotify.getArtista(id)
        .subscribe( artista => { 
            this.artista = artista;
            this.loadingArtist = false;
         });
  }

  getTopTracks( id: string) {
    this.loadingTopTrack = true;
    this.spotify.getTopTracks(id)
        .subscribe( topTracks => { 
            this.topTracks = topTracks;
            console.log(topTracks);
            this.loadingTopTrack = false;
        });
  }


}

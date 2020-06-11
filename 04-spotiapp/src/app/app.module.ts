import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'    // Importar rutas

// Servicios
import { HttpClientModule } from '@angular/common/http';
/* import { SpotifyService } from './services/spotify.service'; */

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// Importar rutas
import { ROUTES } from './app.routes';
import { PaisesHTTPComponent } from './components/paises-http/paises-http.component';

// Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    PaisesHTTPComponent,
    NoimagePipe,
    TarjetasComponent,
    LoadingComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,                                    // Importar Servicio
    RouterModule.forRoot(ROUTES, { useHash:true })      // Importar rutas
  ],
  providers: [
  /*   SpotifyService  -- No es necesario por esta linea que agrega (providedIn: 'root')  */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

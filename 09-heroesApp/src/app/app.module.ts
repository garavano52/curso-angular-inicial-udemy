import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importa Ruta
import { AppRoutingModule } from './app-routing.module';

// Para formularios ya sea por template o reactivos
import { FormsModule } from '@angular/forms'

// Servicios
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesComponent } from './pages/heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   // Rutas
    FormsModule,        // Formularios
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

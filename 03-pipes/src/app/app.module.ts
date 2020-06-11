import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule, LOCALE_ID } from '@angular/core';  // Add Idioma

import { registerLocaleData } from '@angular/common'; // Add Idioma
import localEs from '@angular/common/locales/es';     // Add Idioma
import localFr from '@angular/common/locales/fr';     // Add Idioma

// the second parameter 'fr-FR' is optional
registerLocaleData(localEs);                          // Add Idioma
registerLocaleData(localFr);                          // Add Idioma

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide:LOCALE_ID,                              // Add Idioma
      useValue: 'es'                                  // Add Idioma
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Scroll
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';

// Servicio
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VirtualComponent } from './virtual/virtual.component';
import { DragComponent } from './drag/drag.component';
import { PaisesComponent } from './paises/paises.component';

@NgModule({
  declarations: [
    AppComponent,
    VirtualComponent,
    DragComponent,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,  // Scroll
    DragDropModule,
    HttpClientModule  // Servicio
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

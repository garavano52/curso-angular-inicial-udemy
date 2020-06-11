import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// FORMULARIO
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// SERVICIO
import { HttpClientModule } from '@angular/common/http' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './pages/template/template.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ReactiveComponent
  ],
  imports: [  
    BrowserModule,
    AppRoutingModule,
    FormsModule,          // Para los formularios por TEMPLATE
    ReactiveFormsModule,  // Para los formularios REACTIVOS
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

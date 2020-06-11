import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { LineaComponent } from './components/linea/linea.component';
import { CircularComponent } from './components/circular/circular.component';
import { HelpComponent } from './help/help.component';

// GRAFICOS

@NgModule({
  declarations: [
    AppComponent,
    LineaComponent,
    CircularComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

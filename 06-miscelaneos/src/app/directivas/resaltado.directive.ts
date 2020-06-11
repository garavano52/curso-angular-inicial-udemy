// ElementRef: Se agrega para capturar el elemento HTML (Ej: EL parrafo)
// HostListener: Se agrega para escuchar un evento. (Ej: Cuando se apoya el mouse sobre el elemento)
// Input: Para recibir un parámetro. Es decir se manda un parámetro en la directiva.

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el:ElementRef) { 
    console.log("Directiva llamada");
    /* el.nativeElement.style.background = "null"; */
  }

  @Input("appResaltado") nuevoColor:string;

  @HostListener('mouseenter') mouseEntro() {
    this.resaltar(this.nuevoColor || 'yellow');   // Si no se le manda nada toma el valor Amarillo.  
    /* this.el.nativeElement.style.background = this.nuevoColor; */
  }

  @HostListener('mouseleave') mouseSalio() {
    this.resaltar(null);
  }

  private resaltar(color:string) {
    this.el.nativeElement.style.background = color;
  }

}

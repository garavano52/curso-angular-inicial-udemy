import { Pipe, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas:boolean = true): string {
    /* console.log(value);
    console.log(args); */
    value = value.toLocaleLowerCase();
    let nombres = value.split(' ');
    console.log(nombres); 
    if ( todas ) {
      nombres = nombres.map( nombre => {
        return nombre[0].toUpperCase() + nombre.substr(1);
      } )
      return nombres.join(' ');
    } else {
      return value[0].toUpperCase() + value.substr(1);
    }
    return 'Hola Mundo'; 
  }

}

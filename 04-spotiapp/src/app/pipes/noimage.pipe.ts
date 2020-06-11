import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  // Recibe el arreglo de imagenes que son 3
  transform(images: any[], ...args: unknown[]): string {
    if (!images) {
      return 'assets/img/noimage.png';
    }

    if ( images.length > 0 ) {
      return images[0].url;
    } else {
      return 'assets/img/noimage.png';
    }

  }

}

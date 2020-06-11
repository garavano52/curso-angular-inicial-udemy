import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ControlContainer } from '@angular/forms';
import { Observable } from 'rxjs';
import { promise } from 'protractor';

interface ErrorValidate {
  [s:string]:boolean
}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() {
  }

  existeUsuario( control: FormControl ): Promise<ErrorValidate> | Observable<ErrorValidate> {
    // console.log(!control.value);
    if( !control.value) {  // Si no existe el valor
      return Promise.resolve(null);
    }
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            if ( control.value === 'strider' ) {
              resolve({ existe:true });
            } else {
                resolve( null );
            }

        }, 3500);
    })
  }

  noHerrera( control: FormControl ): ErrorValidate {

    if(control.value?.toLowerCase() === 'herrera' ) {
      return {
        noHerrera: null
      }
    }
    return null;
  }

  passwordIguales(pass1Name: string, pass2Name: string) {

    return ( formGroup: FormGroup ) => {

      const pass1Control = formGroup.controls[pass1Name];
      const pass2Control = formGroup.controls[pass2Name];

      if ( pass1Control.value === pass2Control.value ) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({ noEsIgual:true });
      }
    }
  }

  /*  OTRA SOLUCION
  passwordsNoIguales(pass1Name: string, pass2Name: string): (formGroup: FormGroup) => {[s: string]: boolean} {
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.controls[pass1Name];

      const pass2Control = formGroup.controls[pass2Name];

      if (pass1Control.value === pass2Control.value){
          return null;
        } else {
          return {passwordsNoIguales: true};
        }
    };
  }
  */



}

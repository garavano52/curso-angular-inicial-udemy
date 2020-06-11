import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private url = 'https://identitytoolkit.googleapis.com/v1';
  private API_KEY = 'AIzaSyAoAyRZeUb-DQjKkRvyTo8y9AUJkImqo6w';

  userToken: string;

  // Crear Nuevo Usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  // Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor( private http:HttpClient) { 
    this.leerToken();
  }

  logout() {
    localStorage.removeItem('token');
  }

  loing(usuario: UsuarioModel) {
    const authData = {
      ...usuario, 
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}/accounts:signInWithPassword?key=${this.API_KEY}`, 
      authData
    ).pipe(
      /* catchError - Si quiero atrapar un error*/
      map( resp => {
        this.guardarToken( resp['idToken'] );
        return resp;
      })
    );
  }

  nuevoUsuario( usuario: UsuarioModel) {
    const authData = {
      ...usuario, 
      /* email: usuario.email,
      password: usuario.password, */
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}/accounts:signUp?key=${this.API_KEY}`, 
      authData
    ).pipe(
      /* catchError - Si quiero atrapar un error*/
      map( resp => {
        this.guardarToken( resp['idToken'] );
        return resp;
      })
    );
  }

  private guardarToken( idToken: string ) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken)

    let hoy = new Date();
    hoy.setSeconds(20);
    localStorage.setItem('expira', hoy.getTime().toString());
  
  }

  leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

  estaAutenticado(): boolean {
    // Ojo que se puede modificar el localStorage. Se debe validar también en el servidor.
    // Sólo se hace en el cliente para que no se hagan peticiones de gusto
    if (this.userToken.length < 2) return false;

    const expira = Number(localStorage.getItem('expira'));  // Trae el Nro de la fecha que expira
    const expiraDate = new Date();                    // Crea una constante de tipo Date y
    expiraDate.setTime(expira);                       // le setea la fecha que expira

    return expiraDate > new Date();  // Si la fecha de expiración es mayor a la actual retorna true
                                     // para que pase el guard, si no retorna false
  }

}

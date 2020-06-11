import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { USUARIO_ROUTES } from './components/usuario/usuario.routes';


/* AL FINAL PARA QUE NO SE HAGA TAN EXTENSO SE MEJORA Y SE PONE LAS RUTAS HIJAS EN USUARIO.ROUTES.TS
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component'; */

// usuario/10/nuevo

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'usuario/:id', 
      component: UsuarioComponent, 
      children: USUARIO_ROUTES
      /* [ { path: 'nuevo', component: UsuarioNuevoComponent },
           { path: 'editar', component: UsuarioEditarComponent },
           { path: 'detalle', component: UsuarioDetalleComponent },
           { path: '**', pathMatch:'full', redirectTo: 'editar' } ]  // Cualquier otra ruta direcciona a nuevo */
    },
    { path: '**', pathMatch:'full', redirectTo: 'routePath' }
];

export const APPROUTING = RouterModule.forRoot(ROUTES);
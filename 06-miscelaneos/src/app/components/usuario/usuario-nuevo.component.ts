import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private router:ActivatedRoute) { 

    this.router.parent.params.subscribe( parametrosPadre => { 
      console.log("/usuario/10/nuevo/loquesea - PARAMETRO PADRE 10");
      console.log(parametrosPadre) 
   })

    this.router.params.subscribe( parametros => { 
       console.log("/usuario/10/nuevo/loquesea - ");
       console.log(parametros) 
    })


  }


  ngOnInit(): void {
  }

}

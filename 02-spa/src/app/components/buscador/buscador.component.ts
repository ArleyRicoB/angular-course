import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = [];
  termino:string = "";

  constructor(private activatedRoute:ActivatedRoute, private _heroesServices:HeroesService, private router:Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['heroe'];
      this.heroes = this._heroesServices.buscarHeroe(params['heroe']);
    })
  }

  verHeroe(idx:number) {
    this.router.navigate( ['/heroe', idx] )
  }
}

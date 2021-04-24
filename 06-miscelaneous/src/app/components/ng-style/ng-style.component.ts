import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{ 'font-size': 20 + 'px', color: 'red' }">
      Hola mundo... esta es una etiqueta HTML
    </p>

    <p [style.fontSize.px]="tamano">Hola mundo... esta es una etiqueta HTML</p>

    <button class="btn btn-primary" (click)="tamano = tamano + 5">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary" (click)="tamano = tamano - 5">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styleUrls: ['./ng-style.component.css'],
})
export class NgStyleComponent implements OnInit {
  tamano: number = 30;

  constructor() {}

  ngOnInit(): void {}
}

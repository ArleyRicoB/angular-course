import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})

export class BodyComponent {
  mostrar: boolean = true;

  frase: any = {
    mensaje: 'my message',
    autor: 'myself'
  }

  personajes: string[] = [
    "spiderman",
    "venom",
    "optopus"
  ]
}

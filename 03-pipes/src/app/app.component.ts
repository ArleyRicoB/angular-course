import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitán América';
  nombre2: string = 'aRLEy SnEyDEr RiCO BohórQUEZ';
  arreglo: number[] = [1,2,3,4,5,6,7,8,9,10];
  PI: number = Math.PI;
  porcentaje: number = 0.235;
  salario: number = 1234.5;
  fecha: Date = new Date();
  activar: boolean = true;
  videoURL: string = 'https://www.youtube.com/embed/NYoCbihISxw';

  heroe = {
    nombre: 'logan',
    clave: 'wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: '1',
    }
  }

  idioma: string = 'fr';

  valorPromesa =new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  })
}

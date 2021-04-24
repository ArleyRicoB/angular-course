import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  @ViewChild( IonList ) lista: IonList;
  @Input() terminada = true;

  constructor(protected deseosService: DeseosService, private router: Router, private alertController: AlertController) {}

  ngOnInit() {}

  listaSeleccionada(lista: Lista) {
    this.router.navigateByUrl(`/tabs/tab${this.terminada ? 2 : 1}/agregar/${lista.id}`);
  }

  borrarLista(lista: Lista) {
    this.deseosService.borrarLista(lista);
  }

  async editarLista(lista: Lista) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Nueva lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista',
          value: lista.titulo,
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('cancelar');
            this.lista.closeSlidingItems();
          }
        },
        {
          text: 'Editar',
          handler: (data) => {
            if (data.titulo.length === 0 ) {
              return;
            }

            lista.titulo = data.titulo;
            this.deseosService.guardarStorage();
            this.lista.closeSlidingItems();
          }
        }
      ]
    });
    
    await alert.present();

  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Evento } from '../models/evento.model';
import { EventoService } from '../services/evento.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-eventos-artista',
  templateUrl: './eventos-artista.page.html',
  styleUrls: ['./eventos-artista.page.scss'],
})
export class EventosArtistaPage implements OnInit {

  idArtista: number;
  eventosArtista: Evento[] = [];

  constructor(private nav: Router, private activatedRoute: ActivatedRoute, private eventoService: EventoService, public actionSheetController: ActionSheetController) { }

  async ngOnInit() {
    await this.eventoService.atualizarDados();
    this.idArtista = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.eventosArtista = await this.eventoService.getByArtista(this.idArtista);
    console.log(this.eventosArtista);
  }

  cadastrarEvento() {
    let urlRota = '/cadastrar-evento/'+this.idArtista;
    this.nav.navigate([urlRota]);
  }

  async presentActionSheet(evento: Evento) {
    const actionSheet = await this.actionSheetController.create({
      header: evento.nome,
      buttons: [{
        text: 'Visualizar',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
          let urlRota = '/evento/'+evento.id;
          this.nav.navigate([urlRota]);
        }
      }, {
        text: 'Remover',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Editar',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}

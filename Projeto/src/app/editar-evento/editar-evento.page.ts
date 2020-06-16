import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from '../models/evento.model';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.page.html',
  styleUrls: ['./editar-evento.page.scss'],
})
export class EditarEventoPage implements OnInit {

  evento = {} as Evento;
  id: string;

  constructor(private activatedRoute: ActivatedRoute, private eventoService: EventoService, private nav: Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.evento = this.eventoService.getById(parseInt(this.id));
  }

  async editarEvento(){
    await this.eventoService.editarEvento(this.evento);
    this.nav.navigate(['/eventos-artista/'+this.evento.idArtistas]);
  }
}
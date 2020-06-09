import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evento } from '../models/evento.model';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  evento: Evento;

  constructor(private activatedRoute: ActivatedRoute, private eventoService: EventoService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.evento = this.eventoService.getById(parseInt(id));

    
  }


}

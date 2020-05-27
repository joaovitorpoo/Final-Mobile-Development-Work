import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from '../models/evento.model';
import { artista } from '../models/artista.model';
import { ArtistaService } from '../services/artista.service'
import { EventoService } from '../services/evento.service'

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  eventos: Evento[];
  dadosArtistas: artista[];

  constructor(private nav: Router, private activatedRoute: ActivatedRoute, private eventoService: EventoService, private artistaService: ArtistaService) { 
    
  }

  async ngOnInit() {
    ///this.nav.navigate(['/slide']);

    await this.eventoService.atualizarDados();
    this.eventos = this.eventoService.getDados();
    
  }

}
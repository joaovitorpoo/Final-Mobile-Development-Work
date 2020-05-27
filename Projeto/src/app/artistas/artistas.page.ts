import { Component, OnInit } from '@angular/core';
import { artista } from '../models/artista.model';
import { ArtistaService } from '../services/artista.service'

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.page.html',
  styleUrls: ['./artistas.page.scss'],
})
export class ArtistasPage implements OnInit {

  artistas: artista[];

  constructor(private artistaService: ArtistaService) { }

  async ngOnInit() {
    await this.artistaService.atualizarDados();
    this.artistas = this.artistaService.getDados();
  }

}

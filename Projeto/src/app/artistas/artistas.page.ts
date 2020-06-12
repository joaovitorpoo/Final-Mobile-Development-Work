import { Component, OnInit } from '@angular/core';
import { artista } from '../models/artista.model';
import { ArtistaService } from '../services/artista.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.page.html',
  styleUrls: ['./artistas.page.scss'],
})
export class ArtistasPage implements OnInit {

  artistas: artista[];

  constructor(private artistaService: ArtistaService, private nav: Router, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    
  }

  clicked(id){
    let urlRota = '/artista/'+id;
    this.nav.navigate([urlRota]);
  }

  async ionViewWillEnter() {
    await this.artistaService.atualizarDados();
    this.artistas = this.artistaService.getDados();
  }
}

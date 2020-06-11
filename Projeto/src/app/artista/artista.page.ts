import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { artista } from '../models/artista.model';
import { ArtistaService } from '../services/artista.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.page.html',
  styleUrls: ['./artista.page.scss'],
})
export class ArtistaPage implements OnInit {

  Artista: artista;

  constructor(private activatedRoute: ActivatedRoute, private artistaService: ArtistaService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.Artista = this.artistaService.getById(parseInt(id));
    console.log(this.artistaService.getById(parseInt(id)));
  }

}

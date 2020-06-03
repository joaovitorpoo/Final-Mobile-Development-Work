import { Component, OnInit } from '@angular/core';
import { artista } from '../models/artista.model';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  artista = {} as artista;

  constructor() { }

  ngOnInit() {
  }

}
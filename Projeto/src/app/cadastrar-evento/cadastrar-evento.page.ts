import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastrar-evento',
  templateUrl: './cadastrar-evento.page.html',
  styleUrls: ['./cadastrar-evento.page.scss'],
})
export class CadastrarEventoPage implements OnInit {

  idArtista: number;

  constructor(private nav: Router, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.idArtista = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
  }

}

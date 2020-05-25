import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evento } from '../models/evento.model';
import { EventoService } from '../services/evento.service'

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  dados: Evento[];

  constructor(private activatedRoute: ActivatedRoute, private eventoService: EventoService) { 
    
  }

  async ngOnInit() {
    let primeroEvento: Evento = {
      'id': 1,
      'idArtistas': [0],
      'urlImg': "https://www7.fiemg.com.br/Assets/Images/DynamicImages/c5850ee53a788557b49789d2c6fd27d571ed1f1e2031d34389fcd8df2329be23.jpg",
      'nome': "Pinturas Urbana Brasileiras",
      'valor': "Gratis",
      'tipo': "Pintura",
      'descricao': "Pinturas dos pontos turisticos famosos do Brasil",
      'horario': "15:00",
      'contatoEvento': "(31) 99985-7660",
      'data': "25/07/2020",
      'endereco': {
        'cidade': "Belo Horizonte",
        'bairro': "Ceu Azul",
        'rua': "Alieta",
        'numero': 880,
        'complemento': "Salao De Festa"
      }
    }
    await this.eventoService.editarById(1,primeroEvento);
    await this.eventoService.atualizarDados();
    this.dados = this.eventoService.getDados();
    console.log(this.dados);
  }

}
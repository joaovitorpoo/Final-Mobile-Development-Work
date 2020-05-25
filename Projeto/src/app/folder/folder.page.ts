import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  dados: Evento[];
  dadosArtistas: artista[];

  constructor(private activatedRoute: ActivatedRoute, private eventoService: EventoService, private artistaService: ArtistaService) { 
    
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

    let primeroArtista: artista = {
      'id': 0,
      'nome': "Jhom Rocha",
      'email': "joaovitor1998wejota@gmail.com",
      'telefone': "(31) 98843-2560",
      'tipo': "Programador",
      'descricao': "Primeiro App",
      'dataDeNascimento': "26/04/1998",
      'urlImg': "https://image.freepik.com/vetores-gratis/perfil-de-personagem-de-desenho-animado-de-avatar-de-homem-de-negocios_18591-50137.jpg"
    }

    
    
    
    
  }

}
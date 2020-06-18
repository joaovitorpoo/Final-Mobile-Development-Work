import { Evento } from './../models/evento.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventoService } from '../services/evento.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastrar-evento',
  templateUrl: './cadastrar-evento.page.html',
  styleUrls: ['./cadastrar-evento.page.scss'],
})
export class CadastrarEventoPage implements OnInit {

  idArtista: number;
  evento = {} as Evento;


  constructor(private nav: Router, private activatedRoute: ActivatedRoute, private eventoService: EventoService, public alertController: AlertController) { }

  async ngOnInit() {
    this.idArtista = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  async cadastrar(){
    let erros = 0;
    let texto = "Cadastrado do evento foi feito com sucesso";
    if (this.evento.urlImg == null) {
      erros += 1;
    }
    if (this.evento.nome == null){
      erros += 1;
    }
    if (this.evento.valor == null){
      erros += 1;
    }
    if (this.evento.tipo == null){
      erros += 1;
    }
    if (this.evento.descricao == null){
      erros += 1;
    }
    if (this.evento.data == null){
      erros += 1;
    }
    if (this.evento.horario == null){

    }
    if (this.evento.contatoEvento == null){
      erros += 1;
    }
    if (this.evento.cidade == null){
      erros += 1;
    }
    if (this.evento.bairro == null){
      erros += 1;
    }
    if (this.evento.rua == null){
      erros += 1;
    }
    if (this.evento.numero == null){
      erros += 1;
    }
    this.evento.idArtistas = this.idArtista;
    if(erros > 1){
      texto = "Preencha os campos vazios do formulario";
    }
    if(erros == 1) {
      texto = "Preencha o campo vazio do formulario";
    }
    
    if (erros == 0) {
      await this.eventoService.atualizarDados();
      const alert = await this.alertController.create({
        header: "Cadastro Bem Sucedido!",
        message: texto,
        buttons: ['OK']
      });

      await this.eventoService.add(this.evento);
      await alert.present();
      console.log(this.evento);
      this.nav.navigate(['/eventos-artista/'+this.idArtista]);
    } else {
      const alert = await this.alertController.create({
        header: 'Erro',
        message: texto,
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
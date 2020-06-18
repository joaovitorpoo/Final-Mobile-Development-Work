import { Component, OnInit } from '@angular/core';
import { artista } from '../models/artista.model';
import { ArtistaService } from '../services/artista.service';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  artista = {} as artista;

  constructor(private artistaService: ArtistaService, private nav: Router, public alertController: AlertController, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  async cadastrar() {
    let erros = 0;
    let texto = "Seu cadastrado foi feito com sucesso";
    if (this.artista.nome == null) {
      erros += 1;
    }
    if (this.artista.telefone == null){
      erros += 1;
    }
    if (this.artista.tipo == null){
      erros += 1;
    }
    if (this.artista.urlImg == null){
      erros += 1;
    }
    if (this.artista.email == null){
      erros += 1;
    }
    if (this.artista.descricao == null){
      erros += 1;
    }
    if (this.artista.senha == null){

    }
    if (this.artista.dataDeNascimento == null){
      erros += 1;
    }
    if(erros > 1){
      texto = "Preencha os campos vazios do formulario";
    }
    if(erros == 1) {
      texto = "Preencha o campo vazio do formulario";
    }
    
    if (erros == 0) {
      await this.artistaService.atualizarDados();
      const alert = await this.alertController.create({
        header: 'Bem Vindo '+this.artista.nome+"!",
        message: texto,
        buttons: ['OK']
      });
      await this.artistaService.add(this.artista);
      await alert.present();
      console.log(this.artista);
      this.nav.navigate(['/login']);
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
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { login } from '../models/login.model';
import { ArtistaService } from '../services/artista.service';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUser = {} as login;

  constructor(private a:AppComponent, private artistaService: ArtistaService, public alertController: AlertController, private nav: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.a.selectedIndex = 2;
  }

  async loginArtista(){
    let artistaLogin = await this.artistaService.getByEmail(this.loginUser.email);
    if (artistaLogin != null && artistaLogin != undefined){
      if (artistaLogin.senha == this.loginUser.senha){
        let urlRota = '/eventos-artista/'+artistaLogin.id;
        this.nav.navigate([urlRota]);
      } else {
        const alert = await this.alertController.create({
          header:  'Erro',
          message: "A senha digitada não é válida.",
          buttons: ['OK']
        });
        await alert.present();
      }
    } else {
      const alert = await this.alertController.create({
        header: 'Erro',
        message: "Usuário não esta cadastrado no sistema.",
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}

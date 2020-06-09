import { Injectable } from '@angular/core';
import { artista } from '../models/artista.model'
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class ArtistaService {

  artistas: artista[];

  constructor(private storage: Storage) { }

  async add(artista: artista){
    await this.atualizarDados();
    if (this.artistas == null) {
      this.artistas = [ artista ];
      this.storage.set('Artistas', this.artistas);
    } else {
      this.artistas.push(artista);
      this.storage.set('Artistas', this.artistas);
    }
    await this.atualizarDados();
  }

  getById(id):artista {
    this.atualizarDados();
    for (let index = 0; index < this.artistas.length; index++) {
      if (this.artistas[index].id == id){
        return this.artistas[index];
      }
    }
  }

  async editarById (id: number, artista: artista) {
    await this.atualizarDados();
    for (let index = 0; index < this.artistas.length; index++) {
     if (this.artistas[index].id == id){
        this.artistas[index] = artista;
     }
    }
    this.storage.set('Artistas', this.artistas);
    await this.atualizarDados();
  }

  async deleteById (id: number) {
    await this.atualizarDados();
    for (let index = 0; index < this.artistas.length; index++) {
     if (this.artistas[index].id == id){
       this.artistas.splice(index, 1);
     }
    }
    this.storage.set('Artistas', this.artistas);
    await this.atualizarDados();
   }

  async atualizarDados() {
    await this.storage.get('Artistas').then((value: artista[]) => this.artistas = value);
  }

  idOpen(){
    if (this.artistas == null || this.artistas.length == 0) {
      return 0;
    } else {
      return this.artistas.length;
    }
  }

  getDados() {
    return this.artistas;
  }

  async limparDados() {
    await this.storage.remove('Artistas');
  }
}


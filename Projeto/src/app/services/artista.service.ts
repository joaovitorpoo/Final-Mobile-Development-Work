import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { artista } from '../models/artista.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {

  artistas: artista[];
  servidor = "http://localhost:3000/artistas/";

  constructor(private http: HttpClient) { }

  getById(id):artista {
    this.atualizarDados();
    for (let index = 0; index < this.artistas.length; index++) {
      if (this.artistas[index].id == id){
        return this.artistas[index];
      }
    }
  }

  async getByEmail(email) {
    await this.atualizarDados();
    for (let index = 0; index < this.artistas.length; index++) {
     if (this.artistas[index].email == email){
      return this.artistas[index];
     }
    }
    return null;
  }

  async editarById (id: number, objeto) {
    let resposta: artista;
    await this.http.put(this.servidor+id, objeto).toPromise().then((objetos: artista) => resposta = objetos).catch();
    await this.atualizarDados();
    console.log(resposta);
  }

  async deleteById (id: number) {
    await this.atualizarDados();
    for (let index = 0; index < this.artistas.length; index++) {
      if (this.artistas[index].id == id){
        this.artistas.splice(index, 1);
      }
    }
    await this.http.delete(this.servidor+id).toPromise();
  }

  async add(objeto){
    let resposta: artista;
    await this.http.post(this.servidor, objeto).toPromise().then((objetos: artista) => resposta = objetos).catch();
    await this.atualizarDados();
    console.log(resposta);
  }

  async atualizarDados() {
    await this.http.get(this.servidor).toPromise().then((objetos: artista[]) => this.artistas = objetos).catch();
  }

  getDados() {
    return this.artistas;
  }
}

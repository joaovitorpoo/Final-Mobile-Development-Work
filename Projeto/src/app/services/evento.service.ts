import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../models/evento.model';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  eventos: Evento[];
  servidor = "http://localhost:3000/eventos/";
  
  constructor(private http: HttpClient) { }

  getByArtista(idArtista) {
    let eventosArtista: Evento[] = [];
    for (let index = 0; index < this.eventos.length; index++) {
      if (this.eventos[index].idArtistas == idArtista){
        eventosArtista.push(this.eventos[index]);
      }
    }
    return eventosArtista;
  }

  getById(id):Evento {
    this.atualizarDados();
    for (let index = 0; index < this.eventos.length; index++) {
      if (this.eventos[index].id == id){
        return this.eventos[index];
      }
    }
  }

  async editarEvento (evento: Evento) {
    let resposta: Evento;
    await this.http.put(this.servidor+evento.id, evento).toPromise().then((objetos: Evento) => resposta = objetos).catch();
    await this.atualizarDados();
    console.log(resposta);
  }

  async deleteById (id: number) {
    await this.atualizarDados();
    for (let index = 0; index < this.eventos.length; index++) {
      if (this.eventos[index].id == id){
        this.eventos.splice(index, 1);
      }
    }
    await this.http.delete(this.servidor+id).toPromise();
  }

  async add(objeto){
    let resposta: Evento;
    await this.http.post(this.servidor, objeto).toPromise().then((objetos: Evento) => resposta = objetos).catch();
    await this.atualizarDados();
    console.log(resposta);
  }

  async atualizarDados() {
    await this.http.get(this.servidor).toPromise().then((objetos: Evento[]) => this.eventos = objetos).catch();
  }

  getDados() {
    return this.eventos;
  }
}

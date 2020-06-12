import { Injectable } from '@angular/core';
import { Evento } from '../models/evento.model'
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  
  eventos: Evento[];

  constructor(private storage: Storage) { }

  async add(evento: Evento){
    await this.atualizarDados();
    if (this.eventos == null) {
      this.eventos = [ evento ];
      this.storage.set('Eventos', this.eventos);
    } else {
      this.eventos.push(evento);
      this.storage.set('Eventos', this.eventos);
    }
    await this.atualizarDados();
  }

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

  async editarById (id: number, evento: Evento) {
    await this.atualizarDados();
    for (let index = 0; index < this.eventos.length; index++) {
     if (this.eventos[index].id == id){
        this.eventos[index] = evento;
     }
    }
    this.storage.set('Eventos', this.eventos);
    await this.atualizarDados();
  }

  async deleteById (id: number) {
   await this.atualizarDados();
   for (let index = 0; index < this.eventos.length; index++) {
    if (this.eventos[index].id == id){
      this.eventos.splice(index, 1);
    }
   }
   this.storage.set('Eventos', this.eventos);
   await this.atualizarDados();
  }

  idOpen(){
    if (this.eventos == null || this.eventos.length == 0) {
      return 0;
    } else {
      return this.eventos.length;
    }
  }

  async atualizarDados() {
    await this.storage.get('Eventos').then((value: Evento[]) => this.eventos = value);
  }

  getDados() {
    return this.eventos;
  }

  async limparDados() {
    await this.storage.remove('Eventos');
  }
}

import { Data } from '@angular/router';

export interface Evento {
    id: number;
    idArtistas: number;
    urlImg: String;
    nome: string;
    valor: string;
    tipo: string;
    descricao: string;
    data: Data;
    horario: string;
    contatoEvento: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: number;
    complemento: string;
}

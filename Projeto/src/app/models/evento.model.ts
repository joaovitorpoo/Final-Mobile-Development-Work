export interface Evento {
    id: number;
    idArtistas: number;
    urlImg: String;
    nome: string;
    valor: string;
    tipo: string;
    descricao: string;
    data: string;
    horario: string;
    contatoEvento: string;
    endereco: {
        cidade: string;
        bairro: string;
        rua: string;
        numero: number;
        complemento: string;
    };
}

import { Endereco } from './endereco.model';
import { Telefone } from './telefone.model';
import { Pontos } from './pontos.model';

export class Cliente {
    constructor(
        public id?: number,
        public nome?: string,
        public idade?: number,
        public email?: string,
        public cpf?: number,
        public endereco?: Endereco,
        public telefone?: Telefone,
        public thumb?: string,
        public observacao?: string,
        public pontos?: Pontos,
        public obs?: string
    ) { }
}

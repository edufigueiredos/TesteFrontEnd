import { Endereco } from './endereco.model';
import { Telefone } from './telefone.model';
import { Pontos } from './pontos.model';

export class Cliente {
    constructor(
        public id?: number,
        public nome?: string,
        public email?: string,
        public cpf?: string,
        public endereco?: Endereco,
        public telefone?: Telefone,
        public thumb?: string,
        public observacao?: string,
        public pontos?: Pontos
    ) { }
}

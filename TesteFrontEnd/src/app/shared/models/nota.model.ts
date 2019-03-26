import { Loja } from './loja.model';

export class Nota {
    constructor(
        public id?: number,
        public loja?: Loja,
        public dataNota?: string,
        public dataCadastro?: string,
        public formaPagamento?: string,
        public valor?: number
    ) { }
}

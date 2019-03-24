import { Loja } from './loja.model';

export class Nota {
    constructor(
        public id?: number,
        public loja?: Loja,
        public dataNota?: Date,
        public dataCadastro?: Date,
        public valor?: number
    ) { }
}

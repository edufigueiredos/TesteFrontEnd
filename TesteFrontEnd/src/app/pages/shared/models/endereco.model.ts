export class Endereco {
    constructor(
        public id?: number,
        public logradouro?: string,
        public numero?: number,
        public complemento?: string,
        public bairro?: string,
        public cidade?: string,
        public estado?: string,
        public pais?: string
    ) { }
}

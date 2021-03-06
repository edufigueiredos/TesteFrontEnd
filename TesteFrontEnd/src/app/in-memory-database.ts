import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Cliente } from 'src/app/shared/models/cliente.model';
import { Nota } from './shared/models/nota.model';

export class InMemoryDatabase implements InMemoryDbService {
    createDb() {
        const cliente: Cliente[] = [
            {
                id: 1,
                nome: 'Paulo Santos de Almeida',
                idade: 34,
                email: 'paulo.santos@email.com',
                cpf: 12341233409,
                endereco: {
                    tipo: 'Rua',
                    logradouro: 'Visconde de Souza',
                    numero: 23,
                    complemento: 'Bloco 2, Ap 201',
                    bairro: 'Barra da Tijuca',
                    cidade: 'Rio de Janeiro',
                    estado: 'RJ',
                    pais: 'Brasil'
                },
                telefone: {
                    pais: 55,
                    area: 21,
                    numero: 987654321
                },
                thumb: 'http://loremflickr.com/g/150/150/face',
                pontos: {
                    historico: 189247.73,
                    utilizados: 109000,
                    perdidos: 78000
                },
                obs: 'No último atendimento, o Sr.Paulo estava bastante irritado com a demora no cadastro das notas fiscais.'
            },
            { id: 2, nome: 'Antonio Marques da Silva', email: 'tonhomsilva@email.com', cpf: 23456789012 },
            { id: 3, nome: 'João Sousa Siqueira', email: 'jaosiq@email.com', cpf: 34567890123 },
            { id: 4, nome: 'Armando Jogada', email: 'armando.player@gmail.com', cpf: 45678901234 },
            { id: 5, nome: 'Jordência Sexta', email: 'jordanfriday@hotmail.com', cpf: 56789012345 },
            { id: 6, nome: 'Kelly Guissa', email: 'salsich@obig.net', cpf: 67890123456 }
        ];

        const notas: Nota[] = [
            {
                id: 1,
                loja: {
                    id: 1,
                    nomeFantasia: 'Seu Zé Construções'
                },
                dataNota: '25/03/2019',
                formaPagamento: 'Dinheiro',
                valor: 25,
                dataCadastro: '25/03/2019'
            }
        ];

        return { cliente, notas };
    }
}

import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Cliente } from './pages/shared/models/cliente.model';
import { Endereco } from './pages/shared/models/endereco.model';
import { Loja } from './pages/shared/models/loja.model';
import { Nota } from './pages/shared/models/nota.model';
import { Pontos } from './pages/shared/models/pontos.model';
import { Telefone } from './pages/shared/models/telefone.model';

export class InMemoryDatabase implements: InMemoryDbService {
    createDb() {
        const cliente: Cliente[] = [
            { codigo: 1, nome: 'Paulo Santos de Almeida', email: 'paulo.santos@email.com', cpf: 12341233409 },
            { codigo: 2, nome: 'Antonio Marques da Silva', email: 'tonhomsilva@email.com', cpf: 23456789012 },
            { codigo: 3, nome: 'João Sousa Siqueira', email: 'jaosiq@email.com', cpf: 34567890123 },
            { codigo: 4, nome: 'Armando Jogada', email: 'armando.player@gmail.com', cpf: 45678901234 },
            { codigo: 5, nome: 'Jordência Sexta', email: 'jordanfriday@hotmail.com', cpf: 56789012345 },
            { codigo: 6, nome: 'Kelly Guissa', email: 'salsich@obig.net', cpf: 67890123456 }
        ];

        const clienteSelecionado: Cliente[] = [
            {
                codigo: 1,
                nome: 'Paulo Santos de Almeida',
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
                pontos: {
                    total: 189247.73,
                    utilizados: 109000,
                },
                thumb: 'http://loremflickr.com/g/150/150/face',
                obs: 'No último atendimento, o Sr.Paulo estava bastante irritado com a demora no cadastro das notas fiscais.'
            }
        ];
        return { cliente, clienteSelecionado };
    }
}
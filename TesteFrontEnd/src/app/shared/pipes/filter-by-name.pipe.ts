import { Pipe, PipeTransform } from '@angular/core';
import { Cliente } from 'src/app/shared/models/cliente.model';

@Pipe({ name: 'filterByName' })
export class FilterByName implements PipeTransform {
    transform(clients: Cliente[], nameQuery: string) {
        nameQuery = nameQuery.trim().toLowerCase();
        if (nameQuery) {
            return clients.filter(client => client.nome.toLowerCase().includes(nameQuery));
        } else {
            return clients;
        }
    }

}

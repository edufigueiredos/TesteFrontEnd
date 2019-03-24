import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Cliente } from '../models/cliente.model';
import { ClienteService } from './client.service';

@Injectable({ providedIn: 'root' })
export class DataService {

    private clientData = new BehaviorSubject(<Cliente>Cliente);
    currentClient = this.clientData.asObservable();

    constructor() {}

    loadClient(client: Cliente) {
        this.clientData.next(client);
    }

}

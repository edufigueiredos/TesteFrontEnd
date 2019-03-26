import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Cliente } from '../models/cliente.model';

@Injectable({ providedIn: 'root' })
export class DataService {

    private clientData = new BehaviorSubject(<Cliente>Cliente);
    clientDataLoadedObservable = this.clientData.asObservable();

    private clientLoaded = new BehaviorSubject(false);
    loadedObservable = this.clientLoaded.asObservable();

    private tabActive = new BehaviorSubject('transactions');
    tabActiveObservable = this.tabActive.asObservable();

    constructor() { }

    changeData(client: boolean) {
        this.clientLoaded.next(client);
    }

    changeClient(client: Cliente) {
        this.clientData.next(client);
    }

    changeTab(tab: string) {
        this.tabActive.next(tab);
    }

}

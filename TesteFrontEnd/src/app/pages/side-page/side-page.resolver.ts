import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Cliente } from 'src/app/shared/models/cliente.model';
import { ClienteService } from 'src/app/shared/services/client.service';

@Injectable({ providedIn: 'root' })
export class SidePageResolver implements Resolve<Observable<Cliente[]>> {

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.clienteService.getAll();
    }

    constructor(private clienteService: ClienteService) { }
}

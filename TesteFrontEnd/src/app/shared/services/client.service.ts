import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Cliente } from './../models/cliente.model';

@Injectable({ providedIn: 'root' })
export class ClienteService {

    private apiPath = 'api/cliente';

    constructor(private http: HttpClient) { }

    getAll(): Observable<Cliente[]> {
        return this.http.get(this.apiPath).pipe(
            catchError(this.handleError),
            map(this.jsonDataToClients)
        );
    }

    getById(codigo: number): Observable<Cliente> {
        const url = `${this.apiPath}/${codigo}`;
        return this.http.get(url).pipe(
            catchError(this.handleError),
            map(this.jsonDataToClient)
        );
    }

    private jsonDataToClient(jsonData: any): Cliente {
        return jsonData as Cliente;
    }

    private jsonDataToClients(jsonData: any[]): Cliente[] {
        const client: Cliente[] = [];
        jsonData.forEach(data => client.push(data as Cliente));
        return client;
    }

    private handleError(error: any): Observable<any> {
        console.log(`Erro na requisição => ${error}`);
        return throwError(error);
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Nota } from '../models/nota.model';

@Injectable({ providedIn: 'root' })
export class NotaService {

    constructor(private http: HttpClient) {}

    private apiPath = 'api/notas';

    getAll(): Observable<Nota[]> {
        return this.http.get(this.apiPath).pipe(
            catchError(this.handleError),
            map(this.jsonDataToNotes)
        );
    }

    private jsonDataToNotes(jsonData: any[]): Nota[] {
        const client: Nota[] = [];
        jsonData.forEach(data => client.push(data as Nota));
        return client;
    }

    private handleError(error: any) {
        console.log(`Erro na requisição => ${error}`);
        return throwError(error);
    }
}

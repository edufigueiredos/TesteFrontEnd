import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Cliente } from 'src/app/shared/models/cliente.model';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ClienteService } from 'src/app/shared/services/client.service';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-side-page',
  templateUrl: './side-page.component.html',
  styleUrls: ['./side-page.component.scss']
})
export class SidePageComponent implements OnInit {

  private clientFilter: Cliente;
  private clients: Cliente[];
  private filter = '';
  debounce: Subject<string> = new Subject<string>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private clientService: ClienteService,
    private dataService: DataService
  ) { }


  ngOnInit() {
    // Recebe do resolver os clientes carregados antes do component ser carregado.
    this.clients = this.activatedRoute.snapshot.data['clients'];

    // Adiciona um tempo de 300 milissegundos para começar buscar o cliente digitado no filtro
    // após o usuário parar de digitar.
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter);
  }

  // Recebe o ID do cliente clicado na lista de cliente atravéns de EventEmitter
  // do component ClientList.
  receiveId(id: number) {
    this.clientService.getById(id).subscribe((client) => {
      this.clientFilter = client;
      this.dataService.changeClient(client);
    });
    this.dataService.changeData(true);
  }

  // Método executado após o clique na seta de voltar no component ClientInfo atravéns de EventEmitter.
  // Com isso, limpa a variável que antes guardava qual cliente foi clicado anteriormente.
  clearFilter() {
    this.clientFilter = undefined;
  }

}

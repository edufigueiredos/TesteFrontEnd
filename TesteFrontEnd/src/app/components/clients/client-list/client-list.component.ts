import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Cliente } from 'src/app/shared/models/cliente.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent {

  @Input() clients: Cliente[];
  @Output() sendIdEvent = new EventEmitter<number>();

  constructor() { }

  // Enviar para o component SidePage o ID do cliente clicado na lista de clientes.
  sendIdToSidePage(id: number) {
    this.sendIdEvent.emit(id);
  }
}

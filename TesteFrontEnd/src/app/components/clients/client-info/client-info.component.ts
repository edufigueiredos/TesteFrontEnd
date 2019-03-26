import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

import { ClienteService } from 'src/app/shared/services/client.service';
import { Cliente } from 'src/app/shared/models/cliente.model';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss']
})
export class ClientInfoComponent {

  @Output() clearClientFilterEvent = new EventEmitter<void>();
  @Input() private clientInfo: Cliente;

  constructor(
    private dataService: DataService
  ) { }

  // Primeiro aciona o BehaviorSubject para avisar a outros components que devem
  // desativar os formulários e não carregar alguns dados, e segundo, enviar por EventEmitter
  // um a função do component SidePage limpar o cliente filtrado
  clearClientFilter() {
    this.dataService.changeData(false);
    this.clearClientFilterEvent.emit();
  }

}

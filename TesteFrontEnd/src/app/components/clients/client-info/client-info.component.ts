import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

import { ClienteService } from 'src/app/shared/services/client.service';
import { Cliente } from 'src/app/shared/models/cliente.model';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss']
})
export class ClientInfoComponent {

  @Output() clearClientFilterEvent = new EventEmitter<void>();
  @Input() private clientInfo: Cliente;

  constructor() { }

  clearClientFilter() {
    this.clearClientFilterEvent.emit();
  }

}

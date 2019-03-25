import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/shared/models/cliente.model';
import { ClienteService } from '../../../shared/services/client.service';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent {

  @Input() clients: Cliente[];
  @Output() sendIdEvent = new EventEmitter<number>();

  constructor(private dataService: DataService) { }

  sendIdToSidePage(id: number) {
    this.sendIdEvent.emit(id);
  }
}

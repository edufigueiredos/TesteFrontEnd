import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../shared/models/cliente.model';
import { ClienteService } from '../../shared/services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  private clients: Cliente[];
  private filter: string = '';

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    this.clienteService.getAll().subscribe((client) => {
      this.clients = client;
    });
  }

  // navegar() {
  //   this.router.navigate(
  //     [ { outlets: {
  //           primary: ['index'],
  //           sidePage: ['info']
  //         } } ]
  //   );
  // }

}

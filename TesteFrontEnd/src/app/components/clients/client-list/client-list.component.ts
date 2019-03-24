import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/shared/models/cliente.model';
import { ClienteService } from '../../../shared/services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  @Input() clients: Cliente[];

  constructor() { }

  ngOnInit() {
  }

  mostrarNoConsole(nome) {
    console.log(nome);
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

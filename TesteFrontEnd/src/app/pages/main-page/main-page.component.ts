import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/shared/services/client.service';
import { Cliente } from 'src/app/shared/models/cliente.model';
import { Pontos } from 'src/app/shared/models/pontos.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  balance: number;
  history: number;
  used: number;
  lost: number;

  constructor(
    private clientService: ClienteService
  ) { }

  ngOnInit() {
    // this.loadTransactionsData();
  }

  // private loadTransactionsData() {
  //   this.clientService.getById(1).subscribe((client) => {
  //     let porra: Pontos = <Pontos>client.pontos
  //     this.history = porra.historico;
  //   })
  // }

}

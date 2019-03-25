import { Component, OnInit } from '@angular/core';

import { ClienteService } from 'src/app/shared/services/client.service';
import { DataService } from 'src/app/shared/services/data.service';
import { Observable } from 'rxjs';
import { pipe } from '@angular/core/src/render3';

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
  clientId: number;

  constructor(
    private clientService: ClienteService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    // this.loadClientId();
    this.verifyTransaciontBoolean();
  }

  private loadTransactionsData() {
    this.clientService.getById(1).subscribe((client) => {
      const points = client.pontos;
      this.history = points.historico;
      this.used = points.utilizados;
      this.lost = points.perdidos;
      this.balance = this.history - this.used - this.lost;
    });
  }

  private clearTransactionData() {
    this.history = null;
    this.used = null;
    this.lost = null;
    this.balance = null;
  }

  private loadClientId() {
    this.dataService.clientDataLoadedObservable.subscribe((dataClient) => {
      this.clientId = dataClient.id;
    });
  }

  private verifyTransaciontBoolean() {
    this.dataService.loadedObservable.subscribe((data) => {
      if (data) {
        this.loadTransactionsData();
      } else {
        this.clearTransactionData();
      }
    });
  }

}

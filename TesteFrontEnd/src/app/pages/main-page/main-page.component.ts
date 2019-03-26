import { Component, OnInit } from '@angular/core';

import { ClienteService } from 'src/app/shared/services/client.service';
import { DataService } from 'src/app/shared/services/data.service';

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
  tabActive: string;

  constructor(
    private clientService: ClienteService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    // this.loadClientId();
    this.instanceDataServiceTabs();
    this.verifyTransaciontBoolean();
  }

  // Busca os pontos do cliente e os preenche para serem
  // exibidos na aba 'Transactions'
  private loadTransactionsData() {
    this.clientService.getById(1).subscribe((client) => {
      const points = client.pontos;
      this.history = points.historico;
      this.used = points.utilizados;
      this.lost = points.perdidos;
      this.balance = this.history - this.used - this.lost;
    });
  }

  // Limpa os pontos que foram carregados
  private clearTransactionData() {
    this.history = null;
    this.used = null;
    this.lost = null;
    this.balance = null;
  }

  // Subscreve no BehaviorSubject para buscar o ID do cliente para buscar seus pontos.
  // Porém, o ID está sendo recebido depois do método 'loadTransactionsData()' ser executado,
  // e por causa disso, está gerando um erro no console do navegador.
  private loadClientId() {
    this.dataService.clientDataLoadedObservable.subscribe((dataClient) => {
      this.clientId = dataClient.id;
    });
  }

  // Subscreve no BehaviorSubject e verifica se algum cliente foi carregado.
  // Se sim, ele chama o 'loadTransactionsData()' para preencher os pontos deste cliente.
  private verifyTransaciontBoolean() {
    this.dataService.loadedObservable.subscribe((data) => {
      if (data) {
        this.loadTransactionsData();
      } else {
        this.clearTransactionData();
      }
    });
  }

  // Subescreve no BehaviorSubject para ficar escutando qual aba está ativa
  private instanceDataServiceTabs() {
    this.dataService.tabActiveObservable.subscribe(tab => this.tabActive = tab);
  }

  // Envia para o BehaviorSubject qual aba está ativa
  private changeTab(tab: string) {
    if (tab !== this.tabActive) {
      this.dataService.changeTab(tab);
    }
  }

}

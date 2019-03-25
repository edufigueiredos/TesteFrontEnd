import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Cliente } from 'src/app/shared/models/cliente.model';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { DataService } from 'src/app/shared/services/data.service';
import { ClienteService } from 'src/app/shared/services/client.service';

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
    this.clients = this.activatedRoute.snapshot.data['clients'];
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter);
  }

  receiveId(id: number) {
    this.clientService.getById(id).subscribe(client => this.clientFilter = client);
  }

  clearFilter() {
    this.clientFilter = undefined;
  }

}

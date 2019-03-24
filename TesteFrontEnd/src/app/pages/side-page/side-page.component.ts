import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Cliente } from 'src/app/shared/models/cliente.model';

@Component({
  selector: 'app-side-page',
  templateUrl: './side-page.component.html',
  styleUrls: ['./side-page.component.scss']
})
export class SidePageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  private clients: Cliente[];
  private filter: string = '';

  ngOnInit() {
    this.clients = this.activatedRoute.snapshot.data['clients'];
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navegar() {
    this.router.navigate(
      [ { outlets: {
            primary: ['index'],
            sidePage: ['info']
          } } ]
    );
  }

}

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss']
})
export class ClientInfoComponent {

  @Output() clearClientFilterEvent = new EventEmitter<void>();

  constructor() { }

  clearClientFilter() {
    this.clearClientFilterEvent.emit();
  }

}

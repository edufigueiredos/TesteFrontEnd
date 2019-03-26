import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { TransactionComponent } from './transaction/transaction.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [TransactionComponent, BenefitsComponent, HistoryComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule
  ],
  exports: [
    TransactionComponent,
    BenefitsComponent,
    HistoryComponent
  ]
})
export class DataFormsModule { }

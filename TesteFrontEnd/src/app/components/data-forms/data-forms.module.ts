import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { TransactionComponent } from './transaction/transaction.component';

@NgModule({
  declarations: [TransactionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule
  ],
  exports: [TransactionComponent]
})
export class DataFormsModule { }

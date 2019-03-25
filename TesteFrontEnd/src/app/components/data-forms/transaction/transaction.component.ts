import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { NotaService } from 'src/app/shared/services/note.service';

import { Nota } from 'src/app/shared/models/nota.model';
import { Loja } from 'src/app/shared/models/loja.model';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  disabledTab: boolean;
  noteForm: FormGroup;
  arrayNote: Nota[] = [];
  payments = ['Débito bancário', 'Cartão de crédito', 'Boleto', 'Dinheiro'];

  currencyMask = createNumberMask({
    prefix: 'R$',
    thousandsSeparatorSymbol: '.',
    decimalSymbol: ',',
    allowDecimal: true
  });

  constructor(
    private formBuilder: FormBuilder,
    private noteService: NotaService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.buildNoteForm();
    this.dataService.loadedObservable.subscribe((active: boolean) => {
      this.disabledTab = active;
      this.loadNotes(active);
    });
  }

  loadNotes(active: boolean) {
    if (active) {
      this.noteService.getAll().subscribe(notes => this.arrayNote = notes);
      this.noteForm.enable();
    } else {
      this.arrayNote = [];
      this.noteForm.disable();
    }
  }

  buildNoteForm() {
    this.noteForm = this.formBuilder.group({
      shop: [null, [Validators.required]],
      numberNote: [null, [Validators.required]],
      dateNote: [null, [Validators.required]],
      payment: [null, [Validators.required]],
      value: [null, [Validators.required]]
    });
  }

  submitForm() {
    const note = new Nota();
    const shop = new Loja();

    const dateNow = new Date(Date.now());
    const thisDate = `${dateNow.getDate()}/${dateNow.getMonth()}/${dateNow.getFullYear()}`;
    const subscribeDateForm = new Date(this.noteForm.get('dateNote').value);
    const subscribeDate = `${subscribeDateForm.getDate()}/${subscribeDateForm.getMonth()}/${subscribeDateForm.getFullYear()}`;
    let value: string = this.noteForm.get('value').value;
    value = value.replace('R$', '').replace('.', '').replace(',', '.');

    note.id = this.noteForm.get('numberNote').value;
    shop.nomeFantasia = this.noteForm.get('shop').value;
    note.loja = shop;
    note.id = this.noteForm.get('numberNote').value;
    note.dataNota = subscribeDate;
    note.dataCadastro = thisDate;
    note.formaPagamento = 'Cartão de crédito';
    note.valor = parseFloat(value);
    this.arrayNote.push(note);

    this.resetForm();
  }

  resetForm() {
    this.noteForm.reset();
  }

}

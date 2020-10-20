import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exchange-currency-choose-amount',
  templateUrl: './exchange-currency-choose-amount.component.html',
  styleUrls: ['./exchange-currency-choose-amount.component.scss'],
})
export class ExchangeCurrencyChooseAmountComponent implements OnInit {
  amountArray: number[];
  @Output() amountValue = new EventEmitter<number>();

  constructor() {
    this.amountArray = [10, 100, 1000];
  }

  ngOnInit(): void {}
}

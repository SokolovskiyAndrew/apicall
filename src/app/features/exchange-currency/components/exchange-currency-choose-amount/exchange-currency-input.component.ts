import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-exchange-currency-choose-amount',
  templateUrl: './exchange-currency-choose-amount.component.html',
  styleUrls: ['./exchange-currency-choose-amount.component.scss'],
})
export class ExchangeCurrencyInputComponent implements OnInit {
  amountArray: number[]
  amount: number

  constructor() {}

  ngOnInit(): void {
    this.amountArray = [10, 100, 1000];
    this.amount = this.amountArray[0]
  }

  getValueOnClick(event): number{
    return this.amount = event
  }
}

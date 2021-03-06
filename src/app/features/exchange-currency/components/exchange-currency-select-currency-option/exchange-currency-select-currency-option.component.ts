import { Component, Input, OnInit } from '@angular/core';
import ArrayStore from 'devextreme/data/array_store';
import { CalculationCurrencyService } from '../../services';
import { Currency } from '@share-files/interfaces';

@Component({
  selector: 'app-exchange-currency-dropdown',
  templateUrl: './exchange-currency-select-currency-option.component.html',
  styleUrls: ['./exchange-currency-select-currency-option.component.scss'],
})
export class ExchangeCurrencySelectCurrencyOptionComponent implements OnInit {
  currenciesArray: Currency[];
  @Input()
  set currencies(receivedCurrency: Currency[]) {
    this.currenciesArray = receivedCurrency;
  }

  data: ArrayStore;
  result: number;
  amountValue: number;
  firstSelectCurrencyValue: number;
  secondSelectCurrencyValue: number;
  validationError: string;

  constructor(private calculationService: CalculationCurrencyService) {}

  ngOnInit(): void {
    console.log(this.currencies);
    this.amountValue = 10;
    this.data = new ArrayStore({
      data: this.currenciesArray,
      key: 'cc',
    });
  }

  setAmountValue(value): void {
    this.amountValue = value;
    console.log(this.amountValue);
  }

  onFirstSelectValueChange(firstSelectValue): void {
    this.firstSelectCurrencyValue = firstSelectValue;
    console.log(this.firstSelectCurrencyValue);
  }

  onSecondSelectValueChange(secondSelectValue): void {
    this.secondSelectCurrencyValue = secondSelectValue;
    console.log(this.secondSelectCurrencyValue);
  }

  getCalculationResult(): void {
    if (!this.checkSelectBoxOnErrors()) {
      this.result = this.calculationService.calculateExchangeCurrency(
        this.firstSelectCurrencyValue,
        this.secondSelectCurrencyValue,
        this.amountValue
      );
    }
  }

  checkSelectBoxOnErrors(): string {
    if (!this.firstSelectCurrencyValue && !this.secondSelectCurrencyValue) {
      this.validationError = 'Please, select currencies';
    } else if (
      !this.firstSelectCurrencyValue ||
      !this.secondSelectCurrencyValue
    ) {
      this.validationError = 'Please, select both currencies';
    } else {
      this.validationError = '';
    }

    return this.validationError;
  }
}

import {Component, Input, OnInit} from '@angular/core';
import ArrayStore from 'devextreme/data/array_store';
import {CalculationCurrencyService} from '../../services/calculation-currency/calculation-currency.service';
import {Currency} from '../../../../share-files/interfaces/currency.interface';

@Component({
  selector: 'app-exchange-currency-dropdown',
  templateUrl: './exchange-currency-dropdown.component.html',
  styleUrls: ['./exchange-currency-dropdown.component.scss'],
})
export class ExchangeCurrencyDropdownComponent implements OnInit {
  @Input() currencies: Currency[];
  data: object;
  result: number;
  amountValue = 10;
  firstSelectCurrencyValue: number;
  secondSelectCurrencyValue: number;
  validationError: string;

  constructor(private calculationService: CalculationCurrencyService) {}

  ngOnInit(): void {
    this.data = new ArrayStore({
      data: this.currencies,
      key: 'rate',
    });
  }

  getAmountValue(value): void {
    this.amountValue = value;
    console.log(this.amountValue);
  }

  selectFirstValue(firstValue): void {
    this.firstSelectCurrencyValue = firstValue;
    console.log(this.firstSelectCurrencyValue);
  }

  selectSecondValue(secondValue): void {
    this.secondSelectCurrencyValue = secondValue;
    console.log(this.secondSelectCurrencyValue);
  }

  getCalculationResult(): void {
    this.result = this.calculationService.calculateExchangeCurrency(
      this.firstSelectCurrencyValue,
      this.secondSelectCurrencyValue,
      this.amountValue
    );
    this.selectCurrenciesValidation();
  }

  selectCurrenciesValidation(): void {
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
  }
}

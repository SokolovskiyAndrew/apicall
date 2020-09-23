import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import ArrayStore from 'devextreme/data/array_store';
import {CalculationCurrencyService} from '../../services/calculation-currency/calculation-currency.service';

@Component({
  selector: 'app-exchange-currency-dropdown',
  templateUrl: './exchange-currency-dropdown.component.html',
  styleUrls: ['./exchange-currency-dropdown.component.scss'],
})
export class ExchangeCurrencyDropdownComponent implements OnInit, OnChanges {
  @Input() currencies;
  data: any;
  result: any;
  amountValue = 10;
  firstSelectValue: number;
  secondSelectValue: number;

  constructor(private calculationService: CalculationCurrencyService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.data = new ArrayStore({
      data: this.currencies,
      key: 'txt',
    });
  }

  ngOnInit(): void {}

  getAmountValue(value): void {
    this.amountValue = value;
    console.log(this.amountValue);
  }

  selectFirstValue(firstValue): void {
    this.firstSelectValue = firstValue;
    console.log(this.firstSelectValue);
  }

  selectSecondValue(secondValue): void {
    this.secondSelectValue = secondValue;
    console.log(this.secondSelectValue);
  }

  getCalculationResult(): void {
    this.result = this.calculationService.calculateExchangeCurrency(
      this.firstSelectValue,
      this.secondSelectValue,
      this.amountValue
    );
    console.log(typeof this.result);
  }

  isNumber(value): any {
    return typeof value === 'number';
  }
}

import {Injectable} from '@angular/core';

@Injectable()
export class CalculationCurrencyService {
  result: number | string;
  constructor() {}

  calculateExchangeCurrency(
    firstSelector,
    secondSelector,
    amount
  ): number | string {
    this.result = (
      (amount * amount * firstSelector) /
      (amount * secondSelector)
    ).toFixed(2);
    console.log(
      `first ${firstSelector} second ${secondSelector} amount ${amount}`
    );
    return this.result + secondSelector;
  }
}

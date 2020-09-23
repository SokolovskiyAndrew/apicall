import {Injectable} from '@angular/core';

@Injectable()
export class CalculationCurrencyService {
  constructor() {}

  calculateExchangeCurrency(
    firstSelector,
    secondSelector,
    amount
  ): number | string {
    let result;
    if (!firstSelector && !secondSelector) {
      return (result = 'Please, select currencies');
    } else if (!firstSelector || !secondSelector) {
      return (result = 'Please, select both currencies');
    } else {
      result = parseFloat(
        (amount * (firstSelector / secondSelector)).toFixed(2)
      );
      console.log(
        `First ${firstSelector} second ${secondSelector} amount ${amount}`
      );
      return result;
    }
  }
}

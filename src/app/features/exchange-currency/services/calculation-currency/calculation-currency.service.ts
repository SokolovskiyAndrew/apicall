import { Injectable } from '@angular/core';

@Injectable()
export class CalculationCurrencyService {
  constructor() {}

  calculateExchangeCurrency(firstSelector, secondSelector, amount): number {
    if (firstSelector && secondSelector) {
      const result = parseFloat(
        (amount * (firstSelector / secondSelector)).toFixed(2)
      );
      return result;
    }
  }
}

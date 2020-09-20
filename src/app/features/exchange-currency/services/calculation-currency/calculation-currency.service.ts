import {Injectable} from '@angular/core';

@Injectable()
export class CalculationCurrencyService {
  result: number | string;
  constructor() {}

  calculateExchangeCurrency(
    firstSelector,
    secondSelector,
    input
  ): number | string {
    this.result = (
      (input * input * firstSelector) /
      (input * secondSelector)
    ).toFixed(2);
    console.log(
      `first ${firstSelector} second ${secondSelector} input ${input}`
    );
    return this.result + secondSelector;
  }
}

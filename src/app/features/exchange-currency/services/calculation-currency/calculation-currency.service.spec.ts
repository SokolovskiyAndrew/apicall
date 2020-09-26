import {TestBed} from '@angular/core/testing';

import {CalculationCurrencyService} from './calculation-currency.service';

describe('CalculationCurrencyService', () => {
  let service: CalculationCurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculationCurrencyService]
    });
    service = TestBed.inject(CalculationCurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    console.log(service.calculateExchangeCurrency(3, 2, 7))
  });
});

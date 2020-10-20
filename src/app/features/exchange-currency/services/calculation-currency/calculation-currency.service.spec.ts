import { TestBed } from '@angular/core/testing';

import { CalculationCurrencyService } from './calculation-currency.service';

describe('CalculationCurrencyService', () => {
  let service: CalculationCurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculationCurrencyService],
    });
    service = TestBed.inject(CalculationCurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Calculation function', () => {
    it('calculateExchangeCurrency() should return 20', () => {
      expect(service.calculateExchangeCurrency(6, 3, 10)).toBe(20);
    });

    it('calculateExchangeCurrency() should return 456.24', () => {
      expect(service.calculateExchangeCurrency(19.8733, 4.3559, 100)).toBe(
        456.24
      );
    });

    it('calculateExchangeCurrency() should return 859.81', () => {
      expect(service.calculateExchangeCurrency(28.2673, 32.8763, 1000)).toBe(
        859.81
      );
    });
  });
});

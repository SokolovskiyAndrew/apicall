import {TestBed} from '@angular/core/testing';

import {GetExchangeCurrencyDataService} from './get-exchange-currency-data.service';

describe('InfoService', () => {
  let service: GetExchangeCurrencyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetExchangeCurrencyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

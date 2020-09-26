import {TestBed} from '@angular/core/testing';

import {GetExchangeCurrencyDataService} from './get-exchange-currency-data.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('GetExchangeCurrencyDataService', () => {
  let service: GetExchangeCurrencyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GetExchangeCurrencyDataService,
        HttpHandler,
        HttpClient
      ]
    });
    service = TestBed.inject(GetExchangeCurrencyDataService);
  });

  it('should be created',  (() => {
    expect(service).toBeTruthy();
  }));
});

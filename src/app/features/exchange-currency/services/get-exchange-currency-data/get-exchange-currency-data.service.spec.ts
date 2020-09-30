import {fakeAsync, TestBed, tick} from '@angular/core/testing';

import {GetExchangeCurrencyDataService} from './get-exchange-currency-data.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import {Currency} from '../../../../share-files/interfaces/currency.interface';

const expectedCurrencies: Currency[] = [
  {
    cc: 'EU',
    exchangedate: '20.09.2012',
    r030: 136,
    rate: 10.01,
    txt: 'euro',
  },
  {
    cc: 'AUX',
    exchangedate: '20.09.2012',
    r030: 236,
    rate: 20.02,
    txt: 'canadian buck',
  },
];

describe('GetExchangeCurrencyDataService', () => {
  let getCurrencyDataService: GetExchangeCurrencyDataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GetExchangeCurrencyDataService],
    });
    getCurrencyDataService = TestBed.inject(GetExchangeCurrencyDataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(getCurrencyDataService).toBeTruthy();
  });

  it('getCurrencyData() should return data', () => {
    getCurrencyDataService.getCurrencyData().subscribe((response) => {
      expect(response).toEqual(expectedCurrencies);
    });
    const req = httpTestingController.expectOne(
      `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`
    );
    expect(req.request.method).toBe('GET');
    req.flush(expectedCurrencies);
  });
});

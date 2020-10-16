import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

import {ExchangeCurrencyComponent} from './exchange-currency.component';
import {GetExchangeCurrencyDataService} from '../../services';
import {Currency} from '@share-files/interfaces';

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

describe('ExchangeCurrencyComponent', () => {
  let component: ExchangeCurrencyComponent;
  let fixture: ComponentFixture<ExchangeCurrencyComponent>;
  let currencyDataService: GetExchangeCurrencyDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExchangeCurrencyComponent],
      providers: [GetExchangeCurrencyDataService],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeCurrencyComponent);
    component = fixture.componentInstance;
    currencyDataService = TestBed.inject(GetExchangeCurrencyDataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly assign data', fakeAsync(() => {
    let currencies: Currency[];
    component.currencies$ = of(expectedCurrencies).pipe(delay(400));

    component.currencies$.subscribe((receivedData) => {
      currencies = receivedData;
    });
    expect(currencies).toBeUndefined();
    tick(400);
    expect(currencies).toEqual(expectedCurrencies);
  }));
});

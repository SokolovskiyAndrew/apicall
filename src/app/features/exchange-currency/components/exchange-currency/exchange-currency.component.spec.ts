import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ExchangeCurrencyComponent} from './exchange-currency.component';
import {GetExchangeCurrencyDataService} from '../../services/get-exchange-currency-data/get-exchange-currency-data.service';

describe('ExchangeCurrencyComponent', () => {
  let component: ExchangeCurrencyComponent;
  let fixture: ComponentFixture<ExchangeCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExchangeCurrencyComponent],
      imports: [GetExchangeCurrencyDataService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

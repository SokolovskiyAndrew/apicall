import {
  ComponentFixture,
  fakeAsync,
  TestBed
} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ExchangeCurrencyTableComponent} from './exchange-currency-table.component';

describe('InformationComponent', () => {
  let component: ExchangeCurrencyTableComponent;
  let fixture: ComponentFixture<ExchangeCurrencyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExchangeCurrencyTableComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeCurrencyTableComponent);
    component = fixture.componentInstance;
    component.currencies = [{
        cc: 'abreviation',
        exchangedate: '02.09.2012',
        r030: 20,
        rate: 30,
        txt: 'text',
    }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('currencies should contain array of currencies', fakeAsync(() => {
    fixture.whenStable().then(() => {
      expect(component.currencies.length).toBeGreaterThan(0);
    })
  }));
});

import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ExchangeCurrencyChooseAmountComponent} from './exchange-currency-choose-amount.component';

describe('ExchangeCurrencyChooseAmountComponent', () => {
  let component: ExchangeCurrencyChooseAmountComponent;
  let fixture: ComponentFixture<ExchangeCurrencyChooseAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExchangeCurrencyChooseAmountComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeCurrencyChooseAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

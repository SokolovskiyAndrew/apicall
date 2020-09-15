import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeCurrencyInputComponent } from './exchange-currency-input.component';

describe('ExchangeCurrencyInputComponent', () => {
  let component: ExchangeCurrencyInputComponent;
  let fixture: ComponentFixture<ExchangeCurrencyInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeCurrencyInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeCurrencyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

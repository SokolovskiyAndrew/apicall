import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeCurrencyDropdownComponent } from './exchange-currency-dropdown.component';

describe('ExchangeCurrencyDropdownComponent', () => {
  let component: ExchangeCurrencyDropdownComponent;
  let fixture: ComponentFixture<ExchangeCurrencyDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeCurrencyDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeCurrencyDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

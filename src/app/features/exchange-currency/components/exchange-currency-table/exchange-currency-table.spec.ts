import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ExchangeCurrencyTableComponent} from './exchange-currency-table.component';

describe('InformationComponent', () => {
  let component: ExchangeCurrencyTableComponent;
  let fixture: ComponentFixture<ExchangeCurrencyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExchangeCurrencyTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeCurrencyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

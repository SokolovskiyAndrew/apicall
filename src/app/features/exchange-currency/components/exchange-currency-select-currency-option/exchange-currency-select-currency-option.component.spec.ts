import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {ExchangeCurrencySelectCurrencyOptionComponent} from './exchange-currency-select-currency-option.component';
import {CalculationCurrencyService} from '../../services/calculation-currency/calculation-currency.service';

describe('ExchangeCurrencySelectCurrencyOptionComponent', () => {
  let component: ExchangeCurrencySelectCurrencyOptionComponent;
  let fixture: ComponentFixture<ExchangeCurrencySelectCurrencyOptionComponent>;
  let calcService: CalculationCurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExchangeCurrencySelectCurrencyOptionComponent],
      providers: [CalculationCurrencyService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(
      ExchangeCurrencySelectCurrencyOptionComponent
    );
    calcService = TestBed.inject(CalculationCurrencyService);
    component = fixture.componentInstance;
    component.currencies = [
      {
        cc: 'abreviation',
        exchangedate: '02.09.2012',
        r030: 20,
        rate: 30,
        txt: 'text',
      },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('component variables', () => {
    it('value from first select should be 165', () => {
      component.onFirstSelectValueChange(165);
      expect(component.firstSelectCurrencyValue).toEqual(165);
    });

    it('should assign value to #firstSelectCurrencyValue on "valueChange" event of firstSelectOptions', () => {
      const firstSelectOption = fixture.debugElement.query(
        By.css('#firstSelectCurrencyValue')
      );
      firstSelectOption.triggerEventHandler('valueChange', 20);
      expect(component.firstSelectCurrencyValue).toEqual(20);
    });

    it('value from second select should be 20.21', () => {
      component.onSecondSelectValueChange(20.21);
      expect(component.secondSelectCurrencyValue).toEqual(20.21);
    });

    it('should assign value to #secondSelectCurrencyValue on "valueChange" event of secondSelectOptions', () => {
      const secondSelectOption = fixture.debugElement.query(
        By.css('#secondSelectCurrencyValue')
      );
      secondSelectOption.triggerEventHandler('valueChange', 30.9);
      expect(component.secondSelectCurrencyValue).toEqual(30.9);
    });

    it('value received from choose-amount-component should be 100', () => {
      component.setAmountValue(100);
      expect(component.amountValue).toEqual(100);
    });
  });
});

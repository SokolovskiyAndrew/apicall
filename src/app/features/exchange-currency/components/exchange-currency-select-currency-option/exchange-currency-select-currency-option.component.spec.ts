import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ExchangeCurrencySelectCurrencyOptionComponent } from './exchange-currency-select-currency-option.component';
import { CalculationCurrencyService } from '../../services';
import { DxiButtonModule } from 'devextreme-angular/ui/nested';

describe('ExchangeCurrencySelectCurrencyOptionComponent', () => {
  let component: ExchangeCurrencySelectCurrencyOptionComponent;
  let fixture: ComponentFixture<ExchangeCurrencySelectCurrencyOptionComponent>;
  let calcService: CalculationCurrencyService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExchangeCurrencySelectCurrencyOptionComponent],
      providers: [CalculationCurrencyService],
      imports: [DxiButtonModule],
      schemas: [NO_ERRORS_SCHEMA],
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
        cc: 'select',
        exchangedate: '03.09.2013',
        r030: 30,
        rate: 40,
        txt: 'ruanda',
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

  it('currencies input should set currenciesArray', () => {
    const currenciesFake = [
      {
        cc: 'setter',
        exchangedate: '03.09.2013',
        r030: 30,
        rate: 40,
        txt: 'indian rupia',
      },
    ];
    component.currencies = currenciesFake;
    expect(component.currenciesArray).toBe(currenciesFake);
  });

  describe('validation function', () => {
    it('validationError value should be - Please, select currencies', () => {
      component.checkSelectBoxOnErrors();
      expect(component.validationError).toBe('Please, select currencies');
    });

    it('validationError variable value should be - Please, select both currencies', () => {
      component.firstSelectCurrencyValue = 22;
      component.checkSelectBoxOnErrors();
      expect(component.validationError).toBe('Please, select both currencies');
    });

    it('validationError variable value should be empty', () => {
      component.firstSelectCurrencyValue = 22;
      component.secondSelectCurrencyValue = 23;
      component.checkSelectBoxOnErrors();
      expect(component.validationError).toBe('');
    });
  });

  it('getCalculationResult() should call service calculateExchangeCurrency function if there i\'snt validation error', () => {
    const spy = spyOn(calcService, 'calculateExchangeCurrency');
    spyOn(component, 'checkSelectBoxOnErrors').and.returnValue('');
    component.getCalculationResult();
    expect(spy).toHaveBeenCalled();
  });

  it('getCalculationResult() should\'t call service calculateExchangeCurrency function if there is validation error', () => {
    const spy = spyOn(calcService, 'calculateExchangeCurrency');
    spyOn(component, 'checkSelectBoxOnErrors').and.returnValue(
      'Please, select both currencies'
    );
    component.getCalculationResult();
    expect(spy).not.toHaveBeenCalled();
  });
});

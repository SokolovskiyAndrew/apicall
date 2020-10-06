import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  DxButtonModule,
  DxDataGridModule,
  DxRadioGroupModule,
  DxSelectBoxModule,
} from 'devextreme-angular';

import {ExchangeCurrencyTableComponent} from './components/exchange-currency-table/exchange-currency-table.component';
import {ExchangeCurrencyRoutingModule} from './exchange-currency-routing.module';
import {GetExchangeCurrencyDataService} from './services/get-exchange-currency-data/get-exchange-currency-data.service';
import {ExchangeCurrencySelectCurrencyOptionComponent} from './components/exchange-currency-select-currency-option/exchange-currency-select-currency-option.component';
import {ExchangeCurrencyChooseAmountComponent} from './components/exchange-currency-choose-amount/exchange-currency-choose-amount.component';
import {CalculationCurrencyService} from './services/calculation-currency/calculation-currency.service';
import {FormsModule} from '@angular/forms';
import {ExchangeCurrencyComponent} from './components/exchange-currency/exchange-currency.component';

@NgModule({
  declarations: [
    ExchangeCurrencySelectCurrencyOptionComponent,
    ExchangeCurrencyTableComponent,
    ExchangeCurrencyChooseAmountComponent,
    ExchangeCurrencyComponent,
  ],
  imports: [
    CommonModule,
    ExchangeCurrencyRoutingModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxRadioGroupModule,
    DxButtonModule,
    FormsModule,
  ],
  providers: [GetExchangeCurrencyDataService, CalculationCurrencyService],
})
export class ExchangeCurrencyModule {}

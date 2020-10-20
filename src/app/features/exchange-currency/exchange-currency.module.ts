import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DxButtonModule,
  DxDataGridModule,
  DxRadioGroupModule,
  DxSelectBoxModule,
} from 'devextreme-angular';

import { ExchangeCurrencyTableComponent } from './components/exchange-currency-table/exchange-currency-table.component';
import { ExchangeCurrencyRoutingModule } from './exchange-currency-routing.module';
import {
  GetExchangeCurrencyDataService,
  CalculationCurrencyService,
} from './services';
import { FormsModule } from '@angular/forms';
import { ExchangeCurrencySelectCurrencyOptionComponent } from './components/exchange-currency-select-currency-option/exchange-currency-select-currency-option.component';
import { ExchangeCurrencyComponent } from './components/exchange-currency/exchange-currency.component';
import { ExchangeCurrencyChooseAmountComponent } from './components/exchange-currency-choose-amount/exchange-currency-choose-amount.component';

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

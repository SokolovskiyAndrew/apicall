import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  DxButtonModule,
  DxDataGridModule,
  DxRadioGroupModule,
  DxSelectBoxModule,
} from 'devextreme-angular';
import {FormsModule} from '@angular/forms';

import {
  ExchangeCurrencyComponent,
  ExchangeCurrencyTableComponent,
  ExchangeCurrencySelectCurrencyOptionComponent,
  ExchangeCurrencyChooseAmountComponent,
  GetExchangeCurrencyDataService,
  CalculationCurrencyService,
} from '../exchange-currency';
import {ExchangeCurrencyRoutingModule} from './exchange-currency-routing.module';

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

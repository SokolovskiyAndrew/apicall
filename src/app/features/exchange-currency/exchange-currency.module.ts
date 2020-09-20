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
import {ExchangeCurrencyDropdownComponent} from './components/exchange-currency-dropdown/exchange-currency-dropdown.component';
import {ExchangeCurrencyInputComponent} from './components/exchange-currency-choose-amount/exchange-currency-input.component';
import {CalculationCurrencyService} from './services/calculation-currency/calculation-currency.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ExchangeCurrencyDropdownComponent,
    ExchangeCurrencyTableComponent,
    ExchangeCurrencyInputComponent,
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

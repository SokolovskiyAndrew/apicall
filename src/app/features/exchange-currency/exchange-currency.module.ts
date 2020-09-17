import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// import {HttpClientModule} from '@angular/common/http';
import {DxDataGridModule, DxDropDownBoxModule} from 'devextreme-angular';

import {ExchangeCurrencyTableComponent} from './components/exchange-currency-table/exchange-currency-table.component';
import {ExchangeCurrencyRoutingModule} from './exchange-currency-routing.module';
import {GetExchangeCurrencyDataService} from './services/get-exchange-currency-data/get-exchange-currency-data.service';
import {ExchangeCurrencyDropdownComponent} from './components/exchange-currency-dropdown/exchange-currency-dropdown.component';
import {ExchangeCurrencyInputComponent} from './components/exchange-currency-input/exchange-currency-input.component';

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
    DxDropDownBoxModule,
  ],
  providers: [GetExchangeCurrencyDataService],
})
export class ExchangeCurrencyModule {}

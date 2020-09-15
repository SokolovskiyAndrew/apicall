import {NgModule, Provider} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {DxDataGridModule} from 'devextreme-angular';

import {ExchangeCurrencyTableComponent} from './components/exchange-currency-table/exchange-currency-table.component';
import {ExchangeCurrencyRoutingModule} from './exchange-currency-routing.module';
import {GetInfoInterceptor} from './interceptors/get-info.interceptor';
import {GetExchangeCurrencyDataService} from './services/get-exchange-currency-data/get-exchange-currency-data.service';
import {ExchangeCurrencyDropdownComponent} from './components/exchange-currency-dropdown/exchange-currency-dropdown.component';
import { ExchangeCurrencyInputComponent } from './components/exchange-currency-input/exchange-currency-input.component';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: GetInfoInterceptor,
  multi: true,
};

@NgModule({
  declarations: [
    ExchangeCurrencyDropdownComponent,
    ExchangeCurrencyTableComponent,
    ExchangeCurrencyInputComponent
  ],
  imports: [
    CommonModule,
    ExchangeCurrencyRoutingModule,
    HttpClientModule,
    DxDataGridModule,
  ],
  providers: [GetExchangeCurrencyDataService, INTERCEPTOR_PROVIDER],
})
export class ExchangeCurrencyModule {}

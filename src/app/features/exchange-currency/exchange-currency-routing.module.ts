import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ExchangeCurrencyTableComponent} from './components/exchange-currency-table/exchange-currency-table.component';

const routes: Routes = [{path: '', component: ExchangeCurrencyTableComponent}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExchangeCurrencyRoutingModule {}

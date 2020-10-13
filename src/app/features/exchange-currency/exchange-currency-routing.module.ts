import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ExchangeCurrencyComponent} from './components/exchange-currency/exchange-currency.component';

const routes: Routes = [{path: '', component: ExchangeCurrencyComponent}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExchangeCurrencyRoutingModule {}

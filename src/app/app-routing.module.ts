import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './core/components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'currency-exchange',
    loadChildren: () =>
      import('./features/exchange-currency/exchange-currency.module').then(
        (m) => m.ExchangeCurrencyModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

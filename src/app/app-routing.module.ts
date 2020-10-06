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
      )
  },
  {
    path: 'git-users',
    loadChildren: () =>
      import('./features/git-users/git-users.module').then
      (m => m.GitUsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

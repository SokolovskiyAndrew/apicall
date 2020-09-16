import {NgModule, Provider} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {PreloaderModule} from './components/preloader/preloader.module';
import {HomeComponent} from './components/home/home.component';
import {GetExchangeCurrencyDataInterceptor} from './interceptors/get-exchange-currency-data.interceptor';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: GetExchangeCurrencyDataInterceptor,
  multi: true,
};

@NgModule({
  declarations: [HomeComponent],
  imports: [BrowserModule, CommonModule, RouterModule, PreloaderModule],
  exports: [HomeComponent],
  providers: [INTERCEPTOR_PROVIDER]
})
export class CoreModule {}

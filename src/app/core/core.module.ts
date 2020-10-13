import {NgModule, Provider} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {
  PreloaderModule,
  HomeComponent,
  LoadingSpinnerInterceptor,
} from '../core';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: LoadingSpinnerInterceptor,
  multi: true,
};

@NgModule({
  declarations: [HomeComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    PreloaderModule,
    HttpClientModule,
  ],
  exports: [HomeComponent],
  providers: [INTERCEPTOR_PROVIDER],
})
export class CoreModule {}

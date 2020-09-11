import {NgModule, Provider} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {DxDataGridModule, DxLoadIndicatorModule} from 'devextreme-angular';

import {InformationComponent} from './information.component';
import {InformationRoutingModule} from './information-routing.module';
import {InfoService} from '../../shared/services/info/info.service';
import {InfoInterceptor} from '../../shared/services/info/info.interceptor';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: InfoInterceptor,
  multi: true,
};

@NgModule({
  declarations: [InformationComponent],
  imports: [
    CommonModule,
    InformationRoutingModule,
    HttpClientModule,
    DxLoadIndicatorModule,
    DxDataGridModule,
  ],
  providers: [InfoService, INTERCEPTOR_PROVIDER],
})
export class InformationModule {}

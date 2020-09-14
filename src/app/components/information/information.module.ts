import {NgModule, Provider} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {DxDataGridModule} from 'devextreme-angular';

import {InformationComponent} from './information.component';
import {InformationRoutingModule} from './information-routing.module';
import {InfoInterceptor} from '../../shared/interceptors/info.interceptor';
import {GetDataService} from '../../shared/services/get-data/get-data.service';

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
    DxDataGridModule,
  ],
  providers: [GetDataService, INTERCEPTOR_PROVIDER],
})
export class InformationModule {}

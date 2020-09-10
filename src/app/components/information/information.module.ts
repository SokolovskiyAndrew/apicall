import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {DxDataGridModule, DxLoadIndicatorModule} from 'devextreme-angular';

import {InformationComponent} from './information.component';
import {InformationRoutingModule} from './information-routing.module';
import {InfoService} from './info.service';


@NgModule({
  declarations: [
    InformationComponent
  ],
  imports: [
    CommonModule,
    InformationRoutingModule,
    HttpClientModule,
    DxLoadIndicatorModule,
    DxDataGridModule
  ],
  providers: [
    InfoService
  ]
})
export class InformationModule { }

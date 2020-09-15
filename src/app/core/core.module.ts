import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {GetDataService} from './services/get-data/get-data.service';
import {HomeComponent} from './components/home/home.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule
  ],
  providers: [
    GetDataService
  ],
  exports: [
    HomeComponent
  ]
})
export class CoreModule { }

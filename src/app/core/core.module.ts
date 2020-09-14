import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {PreloaderModule} from '../preloader/preloader.module';
import {PreloaderComponent} from '../preloader/components/preloader/preloader.component';


@NgModule({
  declarations: [
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    PreloaderModule
  ],
  exports: [
    PreloaderComponent
  ],
  providers: [
  ]
})
export class CoreModule { }

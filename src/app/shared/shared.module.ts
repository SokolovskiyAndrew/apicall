import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreloaderModule} from './preloader/preloader.module';
import {PreloaderComponent} from './preloader/components/preloader/preloader.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PreloaderModule
  ],
  exports: [
    PreloaderComponent
  ]
})
export class SharedModule { }

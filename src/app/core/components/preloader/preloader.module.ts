import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DxLoadIndicatorModule} from 'devextreme-angular';
import {PreloaderComponent, PreloaderService} from '../preloader';

@NgModule({
  declarations: [PreloaderComponent],
  imports: [CommonModule, DxLoadIndicatorModule],
  exports: [PreloaderComponent],
  providers: [PreloaderService],
})
export class PreloaderModule {}

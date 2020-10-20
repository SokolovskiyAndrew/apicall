import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { PreloaderService } from './services';
import { DxLoadIndicatorModule } from 'devextreme-angular';

@NgModule({
  declarations: [PreloaderComponent],
  imports: [CommonModule, DxLoadIndicatorModule],
  exports: [PreloaderComponent],
  providers: [PreloaderService],
})
export class PreloaderModule {}

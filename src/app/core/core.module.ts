import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HomeComponent} from './components/home/home.component';
import {RouterModule} from '@angular/router';
import {PreloaderModule} from './components/preloader/preloader.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [BrowserModule, CommonModule, RouterModule, PreloaderModule],
  exports: [HomeComponent, PreloaderModule],
})
export class CoreModule {}

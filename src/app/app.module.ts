import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {PreloaderComponent} from './components/preloader/preloader.component';
import {DxLoadIndicatorModule} from 'devextreme-angular';
import {PreloaderService} from './preloader.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, PreloaderComponent],
  imports: [BrowserModule, AppRoutingModule, DxLoadIndicatorModule],
  providers: [PreloaderService],
  bootstrap: [AppComponent],
})
export class AppModule {}

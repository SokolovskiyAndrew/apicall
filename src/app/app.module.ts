import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {LogTestComponent} from './log-test/log-test/log-test.component';
import {LogService} from './shared/log.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, LogTestComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [LogService],
  bootstrap: [AppComponent],
})
export class AppModule {}

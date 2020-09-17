import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {PreloaderModule} from './core/components/preloader/preloader.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, CoreModule, PreloaderModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

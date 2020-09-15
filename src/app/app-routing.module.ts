import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './core/components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'info',
    loadChildren: () =>
      import('./core/components/information/information.module').then(
        (m) => m.InformationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GetGitUsersListComponent} from '../git-users';

const routes: Routes = [{path: '', component: GetGitUsersListComponent}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GitUsersRoutingModule {}

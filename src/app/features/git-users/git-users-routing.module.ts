import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GetGitUsersListComponent} from './components/get-git-users-list/get-git-users-list.component';

const routes: Routes = [{path: '', component: GetGitUsersListComponent}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GitUsersRoutingModule {}

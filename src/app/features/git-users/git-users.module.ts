import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DxButtonModule} from 'devextreme-angular';

import {GetGitUsersListComponent} from './components/get-git-users-list/get-git-users-list.component';
import {GitUsersRoutingModule} from './git-users-routing.module';
import {GetGitUsersDataService} from './services';

@NgModule({
  declarations: [GetGitUsersListComponent],
  imports: [CommonModule, DxButtonModule, GitUsersRoutingModule],
  providers: [GetGitUsersDataService],
})
export class GitUsersModule {}

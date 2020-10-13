import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GitUsersRoutingModule} from './git-users-routing.module';
import {DxButtonModule} from 'devextreme-angular';
import {GetGitUsersDataService, GetGitUsersListComponent} from '../git-users';

@NgModule({
  declarations: [GetGitUsersListComponent],
  imports: [CommonModule, GitUsersRoutingModule, DxButtonModule],
  providers: [GetGitUsersDataService],
})
export class GitUsersModule {}

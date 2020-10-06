import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GetGitUsersListComponent} from './components/get-git-users-list/get-git-users-list.component';
import {GitUsersRoutingModule} from './git-users-routing.module';
import {DxButtonModule, DxDataGridModule} from 'devextreme-angular';
import {GetGitUsersDataService} from './services/get-git-users-data.service';



@NgModule({
  declarations: [
    GetGitUsersListComponent
  ],
  imports: [
    CommonModule,
    GitUsersRoutingModule,
    DxDataGridModule,
    DxButtonModule,
    DxDataGridModule
  ],
  providers: [GetGitUsersDataService]
})
export class GitUsersModule { }

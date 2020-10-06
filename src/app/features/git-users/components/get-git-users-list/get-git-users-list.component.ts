import { Component, OnInit } from '@angular/core';
import {GetGitUsersDataService} from '../../services/get-git-users-data.service';
import {GitUser} from '../../../../share-files/interfaces/git-user.interface';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-get-git-users-list',
  templateUrl: './get-git-users-list.component.html',
  styleUrls: ['./get-git-users-list.component.scss']
})
export class GetGitUsersListComponent implements OnInit {
  usersList$: Observable<GitUser[]>;
  showUser = false;
  constructor(private getUsersListService: GetGitUsersDataService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(): void {
    this.usersList$ = this.getUsersListService.getGitUsersData();
  }

  onRetrieveUsersList(): void {
    this.showUser = true;
  }

}

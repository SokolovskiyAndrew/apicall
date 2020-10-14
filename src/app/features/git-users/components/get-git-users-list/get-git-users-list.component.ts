import {Component} from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {forkJoin} from 'rxjs';
import * as _ from 'lodash';
import {GitUser} from '@share-files/interfaces';
import {GetGitUsersDataService} from '../../services';

@Component({
  selector: 'app-get-git-users-list',
  templateUrl: './get-git-users-list.component.html',
  styleUrls: ['./get-git-users-list.component.scss'],
})
export class GetGitUsersListComponent {
  constructor(private getUsersListService: GetGitUsersDataService) {}

  getUserData(): void {
    this.getUsersListService
      .getGitUsersData()
      .pipe(
        switchMap((userLoginsList) => {
          const longestLogin = this.findLongestUserLogin(userLoginsList);
          const shortestLogin = this.findShortestUserLogin(userLoginsList);
          const getLongestUserLoginInfo$ = this.getUsersListService.getSeparateGitUserData(
            longestLogin.login
          );
          const getShortestUserLoginInfo$ = this.getUsersListService.getSeparateGitUserData(
            shortestLogin.login
          );

          return forkJoin([
            getLongestUserLoginInfo$,
            getShortestUserLoginInfo$,
          ]);
        })
      )
      .subscribe();
  }

  findLongestUserLogin(usersList: GitUser[]): GitUser {
    return _.maxBy(usersList, 'login.length');
  }

  findShortestUserLogin(usersList: GitUser[]): GitUser {
    return _.minBy(usersList, 'login.length');
  }
}


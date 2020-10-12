import {Component} from '@angular/core';
import {GetGitUsersDataService} from '../../services/get-git-users-data.service';
import {map, switchMap} from 'rxjs/operators';
import {forkJoin} from 'rxjs';
import * as _ from 'lodash';
import {GitUser} from '../../../../share-files/interfaces/git-user.interface';

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
        map((users) => {
          return this.createUserLoginArray(users);
        }),
        switchMap((userLoginsList) => {
          const longestLogin = this.findLongestUserLogin(userLoginsList);
          const shortestLogin = this.findShortestUserLogin(userLoginsList);
          const getLongestUserLoginInfo$ = this.getUsersListService.getSeparateGitUserData(
            longestLogin
          );
          const getShortestUserLoginInfo$ = this.getUsersListService.getSeparateGitUserData(
            shortestLogin
          );

          return forkJoin([
            getLongestUserLoginInfo$,
            getShortestUserLoginInfo$,
          ]);
        })
      )
      .subscribe();
  }

  createUserLoginArray(usersArray: GitUser[]): string[] {
    const userLoginsList: string[] = [];
    usersArray.map((user) => {
      userLoginsList.push(user.login);
    });
    return userLoginsList;
  }

  findLongestUserLogin(usersArray): string {
    let longestUserLogin: string;
    longestUserLogin = _.reduce(usersArray, (longestLogin, currentLogin) => {
      return longestLogin.length > currentLogin.length
        ? longestLogin
        : currentLogin;
    });
    return longestUserLogin;
  }

  findShortestUserLogin(usersArray): string {
    let shortestUserLogin: string;
    shortestUserLogin = _.reduce(usersArray, (shortestLogin, currentLogin) => {
      return shortestLogin.length < currentLogin.length
        ? shortestLogin
        : currentLogin;
    });
    return shortestUserLogin;
  }
}

import {Component} from '@angular/core';
import {GetGitUsersDataService} from '../../services/get-git-users-data.service';
import {map, mergeMap} from 'rxjs/operators';
import {forkJoin} from 'rxjs';
import {GitUser} from '../../../../share-files/interfaces/git-user.interface';

@Component({
  selector: 'app-get-git-users-list',
  templateUrl: './get-git-users-list.component.html',
  styleUrls: ['./get-git-users-list.component.scss'],
})
export class GetGitUsersListComponent {

  constructor(private getUsersListService: GetGitUsersDataService) {}

  getUserData(): void {
    this.getUsersListService.getGitUsersData()
      .pipe(
        map(users => {
          return this.createUserLoginArray(users);
        }),
        mergeMap(userLoginsList => {
          const longestLogin = this.findLongestUserLogin(userLoginsList);
          const shortestLogin = this.findShortestUserLogin(userLoginsList);
          const getLongestUserLoginInfo = this.getUsersListService.getSeparateGitUserData(longestLogin);
          const getShortestUserLoginInfo = this.getUsersListService.getSeparateGitUserData(shortestLogin);

          return forkJoin([getLongestUserLoginInfo, getShortestUserLoginInfo]);
        })
      )
    .subscribe();
  }

  createUserLoginArray(usersArray: GitUser[]): string[] {
    const userLoginsList: string[] = [];
    usersArray.map(user => {
      userLoginsList.push(user.login.toLowerCase());
    });
    return userLoginsList;
  }

  findLongestUserLogin(usersArray): string {
    let longestUserLogin: string;
    longestUserLogin = usersArray.sort((firstCompareString, secondCompareString) => {
      return secondCompareString.length - firstCompareString.length;
    });
    return longestUserLogin[0];
  }

  findShortestUserLogin(usersArray): string {
    let shortestUserLogin: string;
    shortestUserLogin = usersArray.sort((firstCompareString, secondCompareString) => {
      return firstCompareString.length - secondCompareString.length;
    });
    return shortestUserLogin[0];
  }
}




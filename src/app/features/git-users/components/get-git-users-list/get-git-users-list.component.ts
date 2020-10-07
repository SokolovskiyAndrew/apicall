import {Component, OnInit} from '@angular/core';
import {GetGitUsersDataService} from '../../services/get-git-users-data.service';

@Component({
  selector: 'app-get-git-users-list',
  templateUrl: './get-git-users-list.component.html',
  styleUrls: ['./get-git-users-list.component.scss'],
})
export class GetGitUsersListComponent implements OnInit {

  constructor(private getUsersListService: GetGitUsersDataService) {}

  ngOnInit(): void {}

  getUserData(): void {
    this.getUsersListService.getGitUsersData()
    .subscribe();
  }
}

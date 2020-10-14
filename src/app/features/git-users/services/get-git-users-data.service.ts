import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GitUser} from '@share-files/interfaces';

@Injectable()
export class GetGitUsersDataService {
  constructor(private http: HttpClient) {}

  getGitUsersData(): Observable<GitUser[]> {
    return this.http.get<GitUser[]>(
      'https://api.github.com/users?per_page=100&page=1'
    );
  }

  getSeparateGitUserData(userLogin): Observable<GitUser[]> {
    return this.http.get<GitUser[]>(
      `https://api.github.com/users/${userLogin}`
    );
  }
}

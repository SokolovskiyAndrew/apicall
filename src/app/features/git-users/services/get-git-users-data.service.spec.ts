import { TestBed } from '@angular/core/testing';

import { GetGitUsersDataService } from './get-git-users-data.service';

describe('GetGitUsersDataService', () => {
  let service: GetGitUsersDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetGitUsersDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

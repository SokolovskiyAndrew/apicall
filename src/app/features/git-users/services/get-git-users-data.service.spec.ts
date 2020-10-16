import {TestBed} from '@angular/core/testing';

import {GetGitUsersDataService} from './get-git-users-data.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import {GitUser} from '@share-files/interfaces';

const mockGitUsers: GitUser[] = [
  {
    id: 11,
    avatar_url: 'avatar_url1',
    login: 'bearer',
    html_url: 'html_url1',
  },
  {
    id: 12,
    avatar_url: 'avatar_url2',
    login: 'schrute',
    html_url: 'html_url2',
  },
];

describe('GetGitUsersDataService', () => {
  let service: GetGitUsersDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GetGitUsersDataService],
    });
    service = TestBed.inject(GetGitUsersDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getGitUsersData() should return data', () => {
    service.getGitUsersData().subscribe((response) => {
      expect(response).toEqual(mockGitUsers);
    });

    const mockRequest = httpMock.expectOne(
      'https://api.github.com/users?per_page=100&page=1'
    );
    expect(mockRequest.request.method).toBe('GET');
    mockRequest.flush(mockGitUsers);
  });

  it('getSeparateGitUserData(userLogin) should return one user by provided login', () => {
    const login = 'schrute';
    service.getSeparateGitUserData(login).subscribe((response) => {
      expect(response).toEqual(mockGitUsers[0]);
    });

    const mockRequest = httpMock.expectOne(
      'https://api.github.com/users/schrute'
    );
    expect(mockRequest.request.method).toBe('GET');
    mockRequest.flush(mockGitUsers[0]);
  });
});

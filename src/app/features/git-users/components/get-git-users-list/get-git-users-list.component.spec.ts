import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GetGitUsersListComponent} from './get-git-users-list.component';
import {GetGitUsersDataService} from '../../services';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {GitUser} from '@share-files/interfaces';
import {of} from 'rxjs';

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
    login: 'david',
    html_url: 'html_url2',
  },
];

describe('GetGitUsersListComponent', () => {
  let component: GetGitUsersListComponent;
  let fixture: ComponentFixture<GetGitUsersListComponent>;
  let getGitUserService: GetGitUsersDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetGitUsersListComponent],
      providers: [GetGitUsersDataService],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetGitUsersListComponent);
    component = fixture.componentInstance;
    getGitUserService = TestBed.inject(GetGitUsersDataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('findLongestUserLogin() should return one user with longest login length', () => {
    const longestLogin = component.findLongestUserLogin(mockGitUsers);
    expect(longestLogin).toEqual(mockGitUsers[0]);
  });

  it('findShortestUserLogin() should return one user with shortest login length', () => {
    const longestLogin = component.findShortestUserLogin(mockGitUsers);
    expect(longestLogin).toEqual(mockGitUsers[1]);
  });

  it('getUserData() should call getGitUsersData() and getSeparateGitUserData() from getUsersListService and find function from component', () => {
    const getUsersListSpy = spyOn(
      getGitUserService,
      'getGitUsersData'
    ).and.returnValue(of(mockGitUsers));
    const findLongestSpy = spyOn(
      component,
      'findLongestUserLogin'
    ).and.returnValue(mockGitUsers[0]);
    const findShortestSpy = spyOn(
      component,
      'findShortestUserLogin'
    ).and.returnValue(mockGitUsers[1]);
    const getSeparateUserSpy = spyOn(
      getGitUserService,
      'getSeparateGitUserData'
    ).and.returnValue(of(mockGitUsers[0]));

    component.getUserData();

    expect(getUsersListSpy).toHaveBeenCalled();
    expect(findLongestSpy).toHaveBeenCalledWith(mockGitUsers);
    expect(findShortestSpy).toHaveBeenCalledWith(mockGitUsers);
    expect(getSeparateUserSpy).toHaveBeenCalledWith(mockGitUsers[0].login);
  });
});

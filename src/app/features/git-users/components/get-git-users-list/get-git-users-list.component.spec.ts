import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GetGitUsersListComponent} from './get-git-users-list.component';

describe('GetGitUsersListComponent', () => {
  let component: GetGitUsersListComponent;
  let fixture: ComponentFixture<GetGitUsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetGitUsersListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetGitUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

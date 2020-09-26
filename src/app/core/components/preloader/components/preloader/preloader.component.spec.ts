import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PreloaderComponent} from './preloader.component';
import {PreloaderService} from '../../services/preloader.service';

describe('PreloaderComponent', () => {
  let component: PreloaderComponent;
  let fixture: ComponentFixture<PreloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreloaderComponent],
      providers: [PreloaderService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

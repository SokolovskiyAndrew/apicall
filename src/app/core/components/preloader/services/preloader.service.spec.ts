import { TestBed } from '@angular/core/testing';

import { PreloaderService } from './preloader.service';

describe('PreloaderService', () => {
  let service: PreloaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreloaderService],
    });
    service = TestBed.inject(PreloaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import {TestBed} from '@angular/core/testing';

import {GetDataService} from './get-data.service';

describe('InfoService', () => {
  let service: GetDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

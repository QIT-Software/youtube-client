import { TestBed } from '@angular/core/testing';

import { SortFunctionService } from './sort-function.service';

describe('SortFunctionService', () => {
  let service: SortFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

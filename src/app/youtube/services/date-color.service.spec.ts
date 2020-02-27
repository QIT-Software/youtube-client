import { TestBed } from '@angular/core/testing';

import { DateColorService } from './date-color.service';

describe('DateColorService', () => {
  let service: DateColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

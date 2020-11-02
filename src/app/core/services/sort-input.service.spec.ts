import { TestBed } from '@angular/core/testing';
import { SortInputService } from './sort-input.service';

describe('SortInputService', () => {
  let service: SortInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { SortInputService } from './sort-input.service';
import { CoreModule } from '../core.module';

describe('SortInputService', () => {
  let service: SortInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
      providers: [SortInputService]
    });
    service = TestBed.inject(SortInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

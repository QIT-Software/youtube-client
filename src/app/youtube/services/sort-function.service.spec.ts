import { TestBed } from '@angular/core/testing';

import { SortFunctionService } from './sort-function.service';
import { YoutubeModule } from '../youtube.module';
import { CoreModule } from 'src/app/core/core.module';

describe('SortFunctionService', () => {
  let service: SortFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [YoutubeModule, CoreModule],
      providers: [SortFunctionService]
    });
    service = TestBed.inject(SortFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

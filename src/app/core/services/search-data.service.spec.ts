import { TestBed } from '@angular/core/testing';

import { SearchDataService } from './search-data.service';
import { CoreModule } from '../core.module';

describe('SearchDataService', () => {
  let service: SearchDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
      providers: [SearchDataService]
    });
    service = TestBed.inject(SearchDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

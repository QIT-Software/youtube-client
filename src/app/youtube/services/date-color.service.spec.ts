import { TestBed } from '@angular/core/testing';

import { DateColorService } from './date-color.service';
import { YoutubeModule } from '../youtube.module';

describe('DateColorService', () => {
  let service: DateColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [YoutubeModule],
      providers: [DateColorService]
    });
    service = TestBed.inject(DateColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RequestHttpService } from './request-http.service';
import { CoreModule } from '../core.module';

describe('RequestHttpService', () => {
  let service: RequestHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
      providers: [RequestHttpService]
    });
    service = TestBed.inject(RequestHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

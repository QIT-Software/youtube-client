import { TestBed } from '@angular/core/testing';

import { UserTokenService } from './user-token.service';
import { CoreModule } from '../core.module';

describe('UserTokenService', () => {
  let service: UserTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserTokenService]
    });
    service = TestBed.inject(UserTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});

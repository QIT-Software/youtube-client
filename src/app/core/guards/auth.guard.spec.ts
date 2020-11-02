import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
// import { CoreModule } from '../core.module';
import { Router } from '@angular/router';
import { UserTokenService } from '@coreService/index';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let mockRouter: Router;
  let mockUserTokenService: unknown;

  beforeEach(() => {
    mockRouter = {
      navigate (add:  string[]): void {}
    } as Router;
    mockUserTokenService = {
      isLogged(): boolean { return true; }
    } as UserTokenService;

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Router, useValue: mockRouter },
        { provide: UserTokenService, useValue: mockUserTokenService },
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

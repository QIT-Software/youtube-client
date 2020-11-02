import { TestBed } from '@angular/core/testing';

import { ShowSettingService } from './show-setting.service';
import { CoreModule } from '../core.module';

describe('ShowSettingService', () => {
  let service: ShowSettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
      providers: [ShowSettingService]
    });
    service = TestBed.inject(ShowSettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

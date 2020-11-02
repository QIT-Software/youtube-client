import { TestBed } from '@angular/core/testing';

import { DateColorService } from './date-color.service';
import { YoutubeModule } from '../youtube.module';

describe('DateColorService', () => {
  let service: DateColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // imports: [YoutubeModule],
      providers: [DateColorService]
    });
    service = TestBed.inject(DateColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should run getColor', () => {
    expect(service.getColor(new Date())).toEqual('rgb(0, 0, 255)');
  });

  it('should run getColor', () => {
    let now: Date = new Date();
    now.setDate(now.getDate() - 190);
    expect(service.getColor(now)).toEqual('rgb(255, 0, 0)');
  });

  it('should error getColor', () => {
    let now: Date = new Date();
    now.setDate(now.getDate() - 181);
    expect(service.getColor(now)).toEqual('');
  });

  it('should run getColorAlpha', () => {
    expect(service.getColorAlpha(new Date())).toEqual('rgba(0, 0, 255, 0.25)');
  });

  it('should error getColorAlpha', () => {
    let now: Date = new Date();
    now.setDate(now.getDate() - 181);
    expect(service.getColorAlpha(now)).toEqual('');
  });


});

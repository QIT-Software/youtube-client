import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchListComponent } from './search-list.component';
import { CoreModule } from 'src/app/core/core.module';
import { SearchDataService, ShowSettingService, RequestHttpService } from '@coreService/index';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MessageService } from '@coreService/message.service';
import { FilterCardPipe } from '../../pipes/filter-card.pipe';
import { SortFunctionService } from '@youtubeService/sort-function.service';
import { SortCardPipe } from '../../pipes/sort-card.pipe';

describe('ViewListComponent', () => {
  let component: SearchListComponent;
  let fixture: ComponentFixture<SearchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchListComponent, FilterCardPipe, SortCardPipe],
      imports: [CoreModule],
      providers: [SearchDataService, MessageService, ShowSettingService,
        RequestHttpService, HttpClient, HttpHandler, SortFunctionService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
});
});

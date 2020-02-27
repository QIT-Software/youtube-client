import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SortSettingComponent } from '../sort-setting/sort-setting.component';
import { IResponse } from '../../models/response.model';
import { IResponseItem } from '../../models/response-item.model';
import { dataResponse } from './data';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public response: IResponse;
  public listItem: IResponseItem[];
  public settingBlock: boolean;
  public searchWord: string;
  public sorts: number;
  public words: string;
  @ViewChild('inputElement') public inputElement: ElementRef;
  @ViewChild(LoginComponent) public loginComp: LoginComponent;
  @ViewChild(SortSettingComponent) public sortComp: SortSettingComponent;
  @Output() public list: EventEmitter<IResponseItem[]> = new EventEmitter();
  @Output() public sortCard: EventEmitter<number> = new EventEmitter();
  @Output() public filterCard: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.settingBlock = false;
  }

  public ngOnInit(): void {
  }

  public search(): void {
    this.searchWord = this.inputElement.nativeElement.value;
    this.response = dataResponse;
    this.listItem = this.response.items;
    this.list.emit(this.listItem);
  }
  public sortRun(method: number): void {
    this.sorts = method;
    this.sortCard.emit(this.sorts);
  }
  public filterRun(filter: string): void {
    this.words = filter;
    this.filterCard.emit(this.words);
  }

}

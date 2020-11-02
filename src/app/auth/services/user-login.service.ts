import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SearchDataService } from '@coreService/search-data.service';
import { UserTokenService } from '@coreService/user-token.service';
import { RequestHttpService } from '@coreService/request-http.service';
import { MessageService } from '@coreService/message.service';

@Injectable()
export class UserLoginService {

  constructor(private userToken?: UserTokenService,
              private searchData?: SearchDataService,
              private router?: Router,
              private reqHttp?: RequestHttpService,
              private mess?: MessageService) { }

  private confirm(name: string, pass: string): void {
    this.mess.showUp('Loading...');
    this.reqHttp.getToken(name, pass)
      .subscribe((val: string) => {
        if (val.length) {
          this.userToken.set({ name: name, token: val });
        } else {
          this.userToken.delete();
        }
        this.router.navigate(['/']);
        this.mess.hide();
      },         () => { this.mess.showTimer('User is not exist'); }
      );
  }

  public setLogin(name: string, pass: string): void {
    this.confirm(name, pass);
    this.router.navigate(['/']);
  }

  public deleteLogin(): void {
    this.userToken.delete();
    this.searchData.clear();
    this.router.navigate(['/']);
  }

}

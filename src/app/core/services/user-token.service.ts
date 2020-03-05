import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class UserTokenService {
  public logged: Subject<boolean> = new Subject();

  constructor() { }

  private changeLogged(): void {
    this.logged.next(this.isLogged());
  }

  public isLogged(): boolean {
    return localStorage.token && localStorage.token.length > 0;
  }

  public set(obj: { name?: string, token?: string }): void {
    if ('name' in obj) {
      localStorage.username = obj.name;
    }
    if ('token' in obj) {
      localStorage.token = obj.token;
    }
    this.changeLogged();
  }

  public delete(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    this.changeLogged();
  }

  public get(field?: string): string {
    switch (field) {
      case 'token': return localStorage.token || '';
      default: return localStorage.username || '';
    }
  }

}

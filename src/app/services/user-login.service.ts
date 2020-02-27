import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  public loadUserName: any = new Subject();

  constructor() { }
  private confirm(name: string, pass: string): boolean {
    if (name === 'UserName' && pass === '123') {
      return true;
    }
    return false;
  }
  public isLogin(): boolean {
    return localStorage.username && localStorage.username !== '';
  }
  public setLogin(name: string, pass: string): void {
    if (this.confirm(name, pass)) {
      localStorage.username = name;
      this.loadUserName.next(name);
    }
  }
  public deleteLogin(): void {
    localStorage.removeItem('username');
    this.loadUserName.next('');
  }
  public getName(): string {
    return localStorage.username;
  }
}

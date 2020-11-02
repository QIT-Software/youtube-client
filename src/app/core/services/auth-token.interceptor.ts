import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '@env/environment';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor() { }

  public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(req.clone({ params: req.params.set('key', env.API_KEY) }));
  }
}

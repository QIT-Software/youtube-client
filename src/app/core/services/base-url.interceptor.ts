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
export class BaseUrlInterceptor implements HttpInterceptor {
  constructor() { }

  public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(req.clone({ url: `${env.BASE_URL}/${req.url}` }));
  }
}

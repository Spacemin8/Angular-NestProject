import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accesstoken = localStorage.getItem('accesstoken');

    if (accesstoken) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${accesstoken}`,
        },
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}

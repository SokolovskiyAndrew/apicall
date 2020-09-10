import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import {Observable} from 'rxjs';

export class InfoInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Request headers', req.headers);
    if (req.body) {
      console.log('Request body', req.body);
    }
    return next.handle(req);
  }
}

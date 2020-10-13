import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {PreloaderService} from '../interceptors';

@Injectable()
export class LoadingSpinnerInterceptor implements HttpInterceptor {
  constructor(public spinner: PreloaderService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinner.showLoadingSpinner();

    console.log('Request headers', req.headers);

    if (req.body) {
      console.log('Request body', req.body);
    }

    const cloned = req.clone();
    return next.handle(cloned).pipe(
      finalize(() => {
        this.spinner.hideLoadingSpinner();
      })
    );
  }
}

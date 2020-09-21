import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PreloaderService} from '../components/preloader/services/preloader.service';
import {Injectable} from '@angular/core';
import {delay, finalize} from 'rxjs/operators';

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
      delay(1000),
      finalize(() => {
        this.spinner.hideLoadingSpinner();
      })
    );
  }
}

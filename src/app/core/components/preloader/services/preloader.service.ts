import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class PreloaderService {
  // public showSpinner = false;
  isLoading = new Subject<boolean>();

  constructor() {}

  showLoadingSpinner(): void {
    this.isLoading.next(true);
  }
  hideLoadingSpinner(): void {
    this.isLoading.next(false);
  }
}

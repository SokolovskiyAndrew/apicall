import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PreloaderService {
  public showSpinner = false;

  constructor() {}

  showLoadingSpinner(): void {
    this.showSpinner = true;
  }

  hideLoadingSpinner(): void {
    this.showSpinner = false;
  }
}

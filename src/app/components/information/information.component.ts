import {Component, OnInit} from '@angular/core';
import {delay} from 'rxjs/operators';

import {InfoService} from '../../shared/services/info/info.service';
import {PreloaderService} from '../../shared/services/preloader/preloader.service';
import {Currency} from '../../shared/interfaces/interfaces';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent implements OnInit {
  currencies: Currency[] = [];
  preloader: boolean;
  isHttpLoaded = false;

  constructor(
    private infoService: InfoService,
    public spinner: PreloaderService
  ) {}

  ngOnInit(): void {
    this.spinner.showLoadingSpinner();

    this.infoService
      .getApi()
      .pipe(delay(800))
      .subscribe((data) => {
        this.currencies = data;
        this.spinner.hideLoadingSpinner();
      });
  }
}

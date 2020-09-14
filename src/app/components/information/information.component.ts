import {Component, OnInit} from '@angular/core';
import {delay} from 'rxjs/operators';

import {PreloaderService} from '../../preloader/services/preloader.service';
import {Currency} from '../../shared/interfaces/interfaces';
import {GetDataService} from '../../shared/services/get-data/get-data.service';

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
    private getDataService: GetDataService,
    public spinner: PreloaderService
  ) {}

  ngOnInit(): void {
    this.spinner.showLoadingSpinner();

    this.getDataService
      .getApi()
      .pipe(delay(800))
      .subscribe((data) => {
        this.currencies = data;
        this.spinner.hideLoadingSpinner();
      });
  }
}

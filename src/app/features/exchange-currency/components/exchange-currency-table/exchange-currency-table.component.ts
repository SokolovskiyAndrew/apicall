import {Component, OnInit} from '@angular/core';
import {delay} from 'rxjs/operators';

import {PreloaderService} from '../../../../core/components/preloader/services/preloader.service';
import {Currency} from '../../../../share-files/interfaces/interfaces';
import {GetExchangeCurrencyDataService} from '../../services/get-exchange-currency-data/get-exchange-currency-data.service';

@Component({
  selector: 'app-exchange-currency-table',
  templateUrl: './exchange-currency-table.component.html',
  styleUrls: ['./exchange-currency-table.component.scss'],
})
export class ExchangeCurrencyTableComponent implements OnInit {
  currencies: Currency[] = [];
  preloader: boolean;
  isHttpLoaded = false;

  constructor(
    private getDataService: GetExchangeCurrencyDataService,
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

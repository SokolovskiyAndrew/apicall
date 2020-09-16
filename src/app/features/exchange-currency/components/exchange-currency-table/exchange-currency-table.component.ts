import {Component, OnInit, ViewChild} from '@angular/core';
import {delay} from 'rxjs/operators';

import {PreloaderService} from '../../../../core/components/preloader/services/preloader.service';
import {Currency} from '../../../../share-files/interfaces/currency.interface';
import {GetExchangeCurrencyDataService} from '../../services/get-exchange-currency-data/get-exchange-currency-data.service';

@Component({
  selector: 'app-exchange-currency-table',
  templateUrl: './exchange-currency-table.component.html',
  styleUrls: ['./exchange-currency-table.component.scss'],
})
export class ExchangeCurrencyTableComponent implements OnInit {
  currencies: Currency[] = [];
  preloader: boolean;

  constructor(
    private getDataService: GetExchangeCurrencyDataService,
    public spinner: PreloaderService
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.spinner.showLoadingSpinner();

    this.getDataService
      .getApi()
      .pipe(delay(800))
      .subscribe((data) => {
        if (data) {
          this.spinner.hideLoadingSpinner();
        }
        this.currencies = data;
      });
  }
}

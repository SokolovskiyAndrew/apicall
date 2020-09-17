import {Component, OnInit} from '@angular/core';

import {Currency} from '../../../../share-files/interfaces/currency.interface';
import {GetExchangeCurrencyDataService} from '../../services/get-exchange-currency-data/get-exchange-currency-data.service';

@Component({
  selector: 'app-exchange-currency-table',
  templateUrl: './exchange-currency-table.component.html',
  styleUrls: ['./exchange-currency-table.component.scss'],
})
export class ExchangeCurrencyTableComponent implements OnInit {
  currencies: Currency[] = [];

  constructor(private getDataService: GetExchangeCurrencyDataService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.getDataService.getApi().subscribe((data) => {
      this.currencies = data;
    });
  }
}

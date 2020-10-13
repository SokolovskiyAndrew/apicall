import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {GetExchangeCurrencyDataService, Currency} from '../exchange-currency';

@Component({
  selector: 'app-exchange-currency',
  templateUrl: './exchange-currency.component.html',
  styleUrls: ['./exchange-currency.component.scss'],
})
export class ExchangeCurrencyComponent implements OnInit {
  currencies$: Observable<Currency[]>;

  constructor(private getDataService: GetExchangeCurrencyDataService) {}

  ngOnInit(): void {
    this.getCurrenciesList();
  }

  getCurrenciesList(): void {
    this.currencies$ = this.getDataService.getCurrencyData();
  }
}

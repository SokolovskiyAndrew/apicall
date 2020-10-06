import {Component, OnInit} from '@angular/core';
import {Currency} from '../../../../share-files/interfaces/currency.interface';
import {GetExchangeCurrencyDataService} from '../../services/get-exchange-currency-data/get-exchange-currency-data.service';
import {Observable} from 'rxjs';

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

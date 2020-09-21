import {Component, DoCheck, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GetExchangeCurrencyDataService} from '../../services/get-exchange-currency-data/get-exchange-currency-data.service';
import {Currency} from '../../../../share-files/interfaces/currency.interface';
import ArrayStore from 'devextreme/data/array_store';
import {CalculationCurrencyService} from '../../services/calculation-currency/calculation-currency.service';

@Component({
  selector: 'app-exchange-currency-dropdown',
  templateUrl: './exchange-currency-dropdown.component.html',
  styleUrls: ['./exchange-currency-dropdown.component.scss'],
})
export class ExchangeCurrencyDropdownComponent implements OnInit, DoCheck {
  currencies: Currency[] = [];
  data: any;
  result: number | string;

  constructor(
    private getDataService: GetExchangeCurrencyDataService,
    public calculationService: CalculationCurrencyService
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  ngDoCheck(): void {
    this.result = this.calculationService.result;
  }

  fetchData(): void {
    this.getDataService.getApi()
      .subscribe((response) => {
      this.currencies = response;
      this.data = new ArrayStore({
        data: this.currencies,
        key: 'rate',
      });
    });
  }
}

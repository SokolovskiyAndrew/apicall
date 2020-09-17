import {Component, OnInit} from '@angular/core';
import {GetExchangeCurrencyDataService} from '../../services/get-exchange-currency-data/get-exchange-currency-data.service';
import {map} from 'rxjs/operators';
import {Currency} from '../../../../share-files/interfaces/currency.interface';
import ArrayStore from 'devextreme/data/array_store';

@Component({
  selector: 'app-exchange-currency-dropdown',
  templateUrl: './exchange-currency-dropdown.component.html',
  styleUrls: ['./exchange-currency-dropdown.component.scss'],
})
export class ExchangeCurrencyDropdownComponent implements OnInit {
  currencies: Currency[] = []
  data: any

  constructor(private getDataService: GetExchangeCurrencyDataService) {}

  ngOnInit(): void {
  this.getDataService.getApi()
    .pipe(
      // map(el => console.log(el))
    )
    .subscribe(response => {
      this.currencies = response;
      this.data = new ArrayStore({
        data: this.currencies,
      });
    })
  }

  click(e): void {
    console.log(e.itemData.rate)
  }

}

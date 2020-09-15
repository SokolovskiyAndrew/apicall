import { Component, OnInit } from '@angular/core';
import {GetExchangeCurrencyDataService} from '../../services/get-exchange-currency-data/get-exchange-currency-data.service';
import {Currency} from '../../../../share-files/interfaces/interfaces';

@Component({
  selector: 'app-exchange-currency-dropdown',
  templateUrl: './exchange-currency-dropdown.component.html',
  styleUrls: ['./exchange-currency-dropdown.component.scss']
})
export class ExchangeCurrencyDropdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

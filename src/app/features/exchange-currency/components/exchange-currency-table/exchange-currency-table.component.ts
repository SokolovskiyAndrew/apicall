import {Component, Input, OnInit} from '@angular/core';

import {Currency} from '@share-files/interfaces/currency.interface';

@Component({
  selector: 'app-exchange-currency-table',
  templateUrl: './exchange-currency-table.component.html',
  styleUrls: ['./exchange-currency-table.component.scss'],
})
export class ExchangeCurrencyTableComponent implements OnInit {
  @Input() currencies: Currency[];

  constructor() {}

  ngOnInit(): void {}
}

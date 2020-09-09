import { Component, OnInit } from '@angular/core';
import {Currency, InfoService} from './info.service';
import { formatMessage } from 'devextreme/localization';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

currencies: Currency[] = [];
formatMessage = formatMessage;

  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
    this.infoService.getApi().subscribe(data => {
      this.currencies = data;
      console.log(this.currencies)
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Currency, InfoService } from './info.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent implements OnInit {
  currencies: Currency[] = [];
  preloader: boolean;

  constructor(private infoService: InfoService) {}

  ngOnInit(): void {
    this.preloader = true;
    this.infoService.getApi()
      .pipe(delay(800))
      .subscribe((data) => {
      this.currencies = data;
      this.preloader = false;
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {Currency, InfoService} from './info.service';
import {delay} from 'rxjs/operators';
import {PreloaderService} from '../../preloader.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent implements OnInit {
  currencies: Currency[] = [];
  preloader: boolean;
  ishttpLoaded = false;

  constructor(
    private infoService: InfoService,
    public spinner: PreloaderService
  ) {}

  ngOnInit(): void {
    this.spinner.showLoadingSpinner();

    this.infoService
      .getApi()
      .pipe(delay(800))
      .subscribe((data) => {
        this.currencies = data;
        this.spinner.hideLoadingSpinner();
      });
  }
}

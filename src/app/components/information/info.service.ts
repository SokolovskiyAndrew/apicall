import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Currency {
  currencyExcerpt: string;
  exchangeDate: string;
  id?: number;
  rate: number;
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  constructor(private http: HttpClient) {}

  getApi(): Observable<Currency[]> {
    return this.http.get<Currency[]>(
      'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
    );
  }
}

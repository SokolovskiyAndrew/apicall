import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Currency} from '../../shared/interfaces/interfaces';


@Injectable({
  providedIn: 'root',
})
export class InfoService {
  constructor(
    private http: HttpClient
  ) {}

  getApi(): Observable<Currency[]> {
    return this.http.get<Currency[]>(
      'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
    );
  }
}

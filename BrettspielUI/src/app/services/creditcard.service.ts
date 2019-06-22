import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CreditCard} from '../model/CreditCard';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditcardService {

  private baseURL = 'http://localhost:8080/api/creditcard';

  constructor(private http: HttpClient) { }

  saveCreditcard(creditcard: CreditCard): Observable<object> {
    return this.http.post(`${this.baseURL}`, creditcard);
  }

  creditCardExistsByNumber(numberC: number): Observable<any> {
    return this.http.get(`${this.baseURL}/findByNumber/${numberC}`);
  }
}

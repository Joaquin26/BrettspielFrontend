import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Bill} from '../model/Bill';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  private baseURL = 'http://localhost:8080/api/bill';

  constructor(private  http: HttpClient) { }

  saveBill(bill): Observable<object> {
    return this.http.post(`${this.baseURL}`, bill);
  }
}

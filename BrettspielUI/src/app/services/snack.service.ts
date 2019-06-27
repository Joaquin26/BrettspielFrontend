import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Snack} from '../model/Snack';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  private baseURL = 'http://localhost:8080/api/snack';
  constructor(private http: HttpClient) { }

  getSnackList(): Observable<any> {
    return this.http.get(`${this.baseURL}`);
  }

  updateSnackById(snack: Snack): Observable<object> {
    return this.http.put(`${this.baseURL}`, snack);
  }
}

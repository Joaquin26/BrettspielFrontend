import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BatchService {
  private baseURL = 'http://localhost:8080/api/batch';
  constructor(private http: HttpClient) { }

  selectBySnackId(id: number): Observable<any> {
    return this.http.get(`${this.baseURL}/selectBySnackId/${id}`);
  }
}

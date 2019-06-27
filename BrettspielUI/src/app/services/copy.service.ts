import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Copy} from '../model/Copy';

@Injectable({
  providedIn: 'root'
})
export class CopyService {

  private baseURL = 'http://localhost:8080/api/copy';
  constructor(private http: HttpClient) { }

  selectLimitAvailableByBoardGameId(id: number, limit: number): Observable<any> {
    return this.http.get(`${this.baseURL}/selectLimitAvailableByBoardGameId/${id}/${limit}`);
  }

  updateCopyById(copy: Copy): Observable<object> {
    return this.http.put(`${this.baseURL}`, copy);
  }
}

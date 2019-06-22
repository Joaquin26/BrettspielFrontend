import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebcartDetailService{

  private baseURL = 'http://localhost:8080/api/webcartdetail';
  constructor(private http: HttpClient) { }

  public addBoardgameTo(webcartId: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${webcartId}`);
  }
}

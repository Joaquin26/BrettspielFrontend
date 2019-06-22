import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebcartService {
  private baseURL = 'http://localhost:8080/api/webcart';
  constructor(private http: HttpClient) { }

  public getWebcartByid(webcartId: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${webcartId}`);
  }

  public getWebcartByUserId(userId: number): Observable<any> {
    return this.http.get(`${this.baseURL}/findWebcartByUserId/${userId}`);
  }
}

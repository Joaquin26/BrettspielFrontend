import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebcartService {
  private baseURL = 'http://localhost:8080/api/webcart';
  constructor(private http:HttpClient) { }

  public getBoardGameByUserId(userId):Observable<any>
  {
    return this.http.get(`${this.baseURL}findWebcartByUserId/${userId}`);
  }
}

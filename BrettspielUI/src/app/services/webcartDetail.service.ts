import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Webcart } from '../model/Webcart';
import { WebcartDetail } from '../model/WebcartDetail';

@Injectable({
  providedIn: 'root'
})
export class WebcartDetailService{

  private baseURL = 'http://localhost:8080/api/webcartdetail';
  constructor(private http: HttpClient) { }

  public addBoardgameTo(webcartId: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${webcartId}`);
  }

  public save(webcart:Webcart)
  {
    if(webcart.webCartDetails!=null){
        
    this.sav(0,webcart.webCartDetails)
    }
  }
  public sav(n,wb:WebcartDetail[])
  {
    if(n<wb.length){
      wb[n].promotion=null;
      wb[n].snack=null;
    this.http.post(`${this.baseURL}`,wb[n]).subscribe(x=>this.sav(n+1,wb))
    }
  }
}

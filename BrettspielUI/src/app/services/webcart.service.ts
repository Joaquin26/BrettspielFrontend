import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Webcart } from '../model/Webcart';
import { BehaviorSubject}  from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebcartService {
  webcart = new BehaviorSubject(new Webcart());
  currentWebcart = this.webcart.asObservable();
  private baseURL = 'http://localhost:8080/api/webcart';
  constructor(private http: HttpClient) { }

  public getWebcartByid(webcartId: number): Observable<any> {
    return this.http.get(`${this.baseURL}/${webcartId}`);
  }

  public getWebcartByUserId(userId: number): Observable<any> {
    return this.http.get(`${this.baseURL}/findWebcartByUserId/${userId}`);
  }
  assignWebcart(userId)
  {
      if(userId !=-1){
        var  webcart:Webcart=new Webcart();
        var tmpwebcart:Webcart=new Webcart();
        this.currentWebcart.subscribe(data=>tmpwebcart=data);
      this.getWebcartByUserId(userId).subscribe(data=>webcart=data)
        tmpwebcart.id=webcart.id;
        webcart=tmpwebcart;
      this.webcart.next(webcart)
      }
      else
      {
        console.log("entre")
        var  webcart:Webcart=new Webcart()
        webcart.id=-1;
        webcart.createdDate=Date.now().toLocaleString();
        webcart.status="Abierto"
        webcart.webCartDetails=new Array();
        this.webcart.next(webcart)
      }
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginBean } from '../model/LoginBean';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = 'http://localhost:8080/api/user';
  user = new BehaviorSubject(new User());
  currentUser = this.user.asObservable();
  private new:User;

  constructor(private http:HttpClient) { }

  getCategoryList(id):Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }
  logIn(username,password):Observable<any>
  {
    let lg=new LoginBean;
    lg.password=password;
    lg.username=username;
    return this.http.post(`${this.baseURL}/findByCredentials`,lg);
  }
}

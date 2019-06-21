import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseURL = 'http://localhost:8080/api/category';
  
  constructor(private http:HttpClient) { }

  getCategoryList():Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  getCtegory(name:String):Observable<any>{
    return this.http.get(`${this.baseURL}/name/${name}`);
  }
}

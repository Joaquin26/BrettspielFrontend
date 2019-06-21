import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BoardGame } from '../model/Boardgame';

@Injectable({
  providedIn: 'root'
})
export class BoardgameService {

  private baseURL = 'http://localhost:8080/api/boardgame';

  constructor(private http:HttpClient) { }

  getBoardGameList():Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  getBoardGameListFilter(category:String,age:Number,minCost:Number,maxCost:Number,minNumberPlayers:Number):Observable<any>{
    return this.http.get(`${this.baseURL}/filter/${category}/${age}/${minCost}/${maxCost}/${minNumberPlayers}`);
  }

  getBoardGame(id:number):Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }

}

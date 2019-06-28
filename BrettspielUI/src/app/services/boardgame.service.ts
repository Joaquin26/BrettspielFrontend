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

  getBoardGameListFilter(category:String,age:Number,minCost:Number,maxCost:Number,minNumberPlayers:Number,boardgameName:String):Observable<any>{
    if(category!="")
      return this.http.get(`${this.baseURL}/filterCategory/${category}/${age}/${minCost}/${maxCost}/${minNumberPlayers}/${boardgameName}`);
    else
      return this.http.get(`${this.baseURL}/filter/${age}/${minCost}/${maxCost}/${minNumberPlayers}/${boardgameName}`);
  }

  getBoardGame(name:String):Observable<any>{
    return this.http.get(`${this.baseURL}/name/${name}`);
  }

  updateBoardgameById(boardgame: BoardGame): Observable<object> {
    return this.http.put(`${this.baseURL}`, boardgame);
  }

  getBoardGamesByPlayList(id:number):Observable<any>{
    return this.http.get(`${this.baseURL}/PlayList/${id}`);
  }

}

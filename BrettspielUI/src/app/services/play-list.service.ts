import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlayList } from '../model/play-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayListService {
  private baseURL = 'http://localhost:8080/api/playList';
  constructor(private http: HttpClient) { }

  getPlayListByUserId(userId):Observable<any>
  {
    return this.http.get(`${this.baseURL}/findByUserId/${userId}`);
  }

  createPlayList(playList:PlayList)
  {
    return this.http.post(`${this.baseURL}`,playList);
  }

  updatePlayList(playList:Object){
    //console.log(playList);
    return this.http.put(`${this.baseURL}`,playList).subscribe();
  }

}

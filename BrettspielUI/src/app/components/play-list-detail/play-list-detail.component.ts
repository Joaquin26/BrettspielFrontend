import { Component, OnInit, Input } from '@angular/core';
import { BoardgameService } from 'src/app/services/boardgame.service';
import { BoardGame } from 'src/app/model/Boardgame';
import { PlayList } from 'src/app/model/play-list';
import { PlayListService } from 'src/app/services/play-list.service';

@Component({
  selector: 'app-play-list-detail',
  templateUrl: './play-list-detail.component.html',
  styleUrls: ['./play-list-detail.component.css']
})
export class PlayListDetailComponent implements OnInit {

  @Input() playList: PlayList
  constructor(private playListService: PlayListService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
  }
  deleteBoardGame(boardGame:BoardGame){
    for(let i=0;i<=this.playList.boardGames.length;++i){
      //console.log(playList.boardGames[i].id);
      if(this.playList.boardGames[i].id==boardGame.id){
        this.playList.boardGames.splice(i,1);
        break;
      }
    }
    this.playListService.updatePlayList(this.playList);
  }
}

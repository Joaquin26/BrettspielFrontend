import { Component, OnInit, Input } from '@angular/core';
import { BoardgameService } from 'src/app/services/boardgame.service';
import { BoardGame } from 'src/app/model/Boardgame';

@Component({
  selector: 'app-play-list-detail',
  templateUrl: './play-list-detail.component.html',
  styleUrls: ['./play-list-detail.component.css']
})
export class PlayListDetailComponent implements OnInit {

  @Input() playListId: number
  boardGames: BoardGame[];
  constructor(private boardGameService: BoardgameService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.boardGameService.getBoardGamesByPlayList(this.playListId)
      .subscribe(boardGames => {
        this.boardGames = boardGames;
        console.log(boardGames);
      });
  }
}

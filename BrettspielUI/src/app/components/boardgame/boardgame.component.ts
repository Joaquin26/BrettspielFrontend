import { Component, OnInit, Input } from '@angular/core';
import { BoardgameService } from '../../services/boardgame.service';
import { BoardGame } from '../../model/Boardgame';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-boardgame',
  templateUrl: './boardgame.component.html',
  styleUrls: ['./boardgame.component.css']
})
export class BoardgameComponent implements OnInit {

  boardgame: BoardGame;
  id:number;
  constructor(private boardgameService: BoardgameService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.id= this.activatedRoute.snapshot.params.id;
    this.loadData();
  }

  loadData(){
    this.boardgameService.getBoardGame(this.id)
      .subscribe(boardgame => this.boardgame = boardgame);
    }
}

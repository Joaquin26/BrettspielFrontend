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
  name:String;
  cant:Number;
  constructor(private boardgameService: BoardgameService, private activatedRoute: ActivatedRoute) {
    this.cant=1;
  }

  ngOnInit() {
    this.name= this.activatedRoute.snapshot.params.name;
    this.loadData();
  }

  loadData(){
    this.boardgameService.getBoardGame(this.name)
      .subscribe(boardgame => this.boardgame = boardgame);
    }
}

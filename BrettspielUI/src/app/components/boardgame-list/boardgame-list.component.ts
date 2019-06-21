import { Component, OnInit } from '@angular/core';
import { BoardgameService } from '../../services/boardgame.service';
import { BoardGame } from '../../model/Boardgame';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-boardgame-list',
  templateUrl: './boardgame-list.component.html',
  styleUrls: ['./boardgame-list.component.css']
})
export class BoardgameListComponent implements OnInit {

  boardgames: BoardGame[];
  minCost: Number;
  maxCost: Number;
  minNumberPlayers: Number;
  age: Number;
  category: String;

  constructor(private boardgameService: BoardgameService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.minCost = 0;
    this.maxCost = 200;
    this.minNumberPlayers = 1;
    this.age = 8;
  }

  ngOnInit() {
    this.category = this.activatedRoute.snapshot.params.category;
    console.log(this.category);
    if (this.category == null)
      this.loadData();
    else
      this.loadFilterData();

  }

  loadData() {
    this.boardgameService.getBoardGameList()
      .subscribe(boardgames => this.boardgames = boardgames);
  }

  loadFilterData() {
    this.boardgameService.getBoardGameListFilter(this.category, this.age, this.minCost, this.maxCost, this.minNumberPlayers)
      .subscribe(boardgames => this.boardgames = boardgames);
  }

  public setPlayers(players){
    this.minNumberPlayers=players;
    if(this.category!=null)
      this.loadFilterData();
  }

  public setAge(age){
    this.age=age;
    if(this.category!=null)
      this.loadFilterData();
  }

  public gotoProductDetailsV2(url, id) {
    var myurl = `${url}/${id}`;
    this.router.navigateByUrl(myurl);
  }
}

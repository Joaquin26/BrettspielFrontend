import { Component, OnInit } from '@angular/core';
import { BoardgameService } from '../../services/boardgame.service';
import { BoardGame } from '../../model/Boardgame';
import { Router } from '@angular/router';


@Component({
  selector: 'app-boardgame-list',
  templateUrl: './boardgame-list.component.html',
  styleUrls: ['./boardgame-list.component.css']
})
export class BoardgameListComponent implements OnInit {

  boardgames: BoardGame[];

  constructor(private boardgameService: BoardgameService,private router: Router) { }

  ngOnInit() {
    this.loadData();
  }
  
  loadData() {
    this.boardgameService.getBoardGameList()
      .subscribe(boardgames => this.boardgames = boardgames);
  }

  public gotoProductDetailsV2(url, id) {

    var myurl = `${url}/${id}`;
    this.router.navigateByUrl(myurl).then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }
}

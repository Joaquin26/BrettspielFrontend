import { Component, OnInit, Input } from '@angular/core';
import { BoardgameService } from '../../services/boardgame.service';
import { BoardGame } from '../../model/Boardgame';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from 'src/app/model/Image';

@Component({
  selector: 'app-boardgame',
  templateUrl: './boardgame.component.html',
  styleUrls: ['./boardgame.component.css']
})
export class BoardgameComponent implements OnInit {

  boardgame: BoardGame;
  name:String;
  cant:Number;
  constructor(private boardgameService: BoardgameService, private activatedRoute: ActivatedRoute,private router: Router) {
    this.cant=1;
    this.boardgame=new BoardGame();
    let img=new Image();
    img.url="";
    this.boardgame.images=[];
    this.boardgame.images.push(img);

  }

  ngOnInit() {
    this.name= this.activatedRoute.snapshot.params.name;
    this.loadData();
  }

  loadData(){
    this.boardgameService.getBoardGame(this.name)
      .subscribe(boardgame => {
        this.boardgame = boardgame; 
        if(this.boardgame.id==-1)
           this.router.navigateByUrl(`/404`);
      });
      
    }
}

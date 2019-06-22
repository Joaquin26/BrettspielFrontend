import { Component, OnInit, Input } from '@angular/core';
import { BoardgameService } from '../../services/boardgame.service';
import { BoardGame } from '../../model/Boardgame';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { Webcart } from 'src/app/model/Webcart';
import { WebcartService } from 'src/app/services/webcart.service';
import { WebcartDetailService } from 'src/app/services/webcartDetail.service';
import { WebcartDetail } from 'src/app/model/WebcartDetail';

@Component({
  selector: 'app-boardgame',
  templateUrl: './boardgame.component.html',
  styleUrls: ['./boardgame.component.css']
})
export class BoardgameComponent implements OnInit {

  boardgame: BoardGame;
  name:String;
  cant:Number;
  webcart:Webcart;
  constructor(private boardgameService: BoardgameService,private webcartService:WebcartService,private webcartDetailService:WebcartDetailService, private activatedRoute: ActivatedRoute) {
    this.cant=1;
    this.webcart=new Webcart();
    this.boardgame=new BoardGame()
  }

  ngOnInit() {
    this.name= this.activatedRoute.snapshot.params.name;
    this.loadData();
    
  }

  loadData(){
    this.webcartService.currentWebcart.subscribe(webcart=>this.webcart=webcart)
    this.boardgameService.getBoardGame(this.name)
      .subscribe(boardgame => this.boardgame = boardgame);
    }
  addBoardGame()
  {
    var wbd:WebcartDetail=new WebcartDetail();
    wbd.boardGame=this.boardgame;
    wbd.quantity=this.cant;
    
    this.webcart.webCartDetails.push(wbd)
    this.webcartService.webcart.next(this.webcart);
  }
}

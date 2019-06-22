import { Component, OnInit, Input } from '@angular/core';
import { BoardgameService } from '../../services/boardgame.service';
import { BoardGame } from '../../model/Boardgame';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Webcart } from 'src/app/model/Webcart';
import { WebcartService } from 'src/app/services/webcart.service';
import { WebcartDetailService } from 'src/app/services/webcartDetail.service';
import { WebcartDetail } from 'src/app/model/WebcartDetail';
import { Image } from 'src/app/model/Image';

@Component({
  selector: 'app-boardgame',
  templateUrl: './boardgame.component.html',
  styleUrls: ['./boardgame.component.css']
})
export class BoardgameComponent implements OnInit {

  boardgame: BoardGame;
  name:String;
  cant:number;
  webcart:Webcart;
  constructor(private boardgameService: BoardgameService,private webcartService:WebcartService,
    private webcartDetailService:WebcartDetailService, private activatedRoute: ActivatedRoute,private router: Router) {
    this.cant=1;
    this.webcart=new Webcart();
    this.boardgame=new BoardGame()
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
    this.webcartService.currentWebcart.subscribe(webcart=>this.webcart=webcart)
    this.boardgameService.getBoardGame(this.name)
      .subscribe(boardgame => {
        this.boardgame = boardgame; 
        if(this.boardgame.id==-1)
           this.router.navigateByUrl(`/404`);
      });
      
    }
  addBoardGame()
  {
    this.webcartService.currentWebcart.subscribe(webcart=>this.webcart=webcart)
    var wbd:WebcartDetail=new WebcartDetail();
    wbd.boardGame=this.boardgame;
    wbd.quantity=this.cant;
    var fakewb:Webcart=new Webcart()
    fakewb.id=this.webcart.id;
    wbd.webCart=fakewb;
    var webcart:Webcart=JSON.parse(localStorage.getItem("carrito"));
    webcart.webCartDetails.push(wbd)
    localStorage.removeItem("carrito")
    localStorage.setItem("carrito",JSON.stringify(webcart))
    this.webcartService.webcart.next(webcart)
  }
  guardar()
  {
    var webcart:Webcart;
    this.webcartService.currentWebcart.subscribe(data=>webcart=data)
    localStorage.setItem("carrito",JSON.stringify(webcart))
  }
}

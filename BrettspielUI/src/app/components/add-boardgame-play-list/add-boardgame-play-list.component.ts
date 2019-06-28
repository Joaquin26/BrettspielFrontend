import { Component, OnInit, Input } from '@angular/core';
import { PlayList } from 'src/app/model/play-list';
import { UserService } from 'src/app/services/user.service';
import { PlayListService } from 'src/app/services/play-list.service';
import { BoardGame } from 'src/app/model/Boardgame';

@Component({
  selector: 'app-add-boardgame-play-list',
  templateUrl: './add-boardgame-play-list.component.html',
  styleUrls: ['./add-boardgame-play-list.component.css']
})
export class AddBoardgamePlayListComponent implements OnInit {

  @Input() boardGame:BoardGame;
  playLists: PlayList[];
  constructor(private userService:UserService,private playListService:PlayListService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.playListService.getPlayListByUserId(this.userService.user.value.id).subscribe(data=>this.playLists=data);
  }

  addBoardGame(playList:PlayList){
    playList.boardGames.push(this.boardGame);
    
    this.playListService.updatePlayList(playList);
  }

  deleteBoardGame(playList:PlayList){
  
    for(let i=0;i<=playList.boardGames.length;++i){
      console.log(playList.boardGames[i].id);
      if(playList.boardGames[i].id==this.boardGame.id){
        playList.boardGames.splice(i,1);
        break;
      }
    }
    
    this.playListService.updatePlayList(playList);
  }
  
  verificar(playList:PlayList){
    return(playList.boardGames.filter(boardGame=>boardGame.name==this.boardGame.name).length>0);
  }

}

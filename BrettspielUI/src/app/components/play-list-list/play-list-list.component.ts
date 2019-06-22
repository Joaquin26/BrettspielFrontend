import { Component, OnInit, Input } from '@angular/core';
import { PlayList } from 'src/app/model/play-list';
import { UserService } from 'src/app/services/user.service';
import { PlayListService } from 'src/app/services/play-list.service';

@Component({
  selector: 'app-play-list-list',
  templateUrl: './play-list-list.component.html',
  styleUrls: ['./play-list-list.component.css']
})
export class PlayListListComponent implements OnInit {
 
  constructor(private userService:UserService,private playListService:PlayListService) {
    this.playLists=new Array()
   }
   @Input() playLists:PlayList[]
  ngOnInit() {
    console.log()
    this.loadData()
  }
  loadData()
  {
   
  }

}

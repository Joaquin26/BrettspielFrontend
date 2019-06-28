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

  private playList: PlayList;
  constructor(private userService: UserService, private playListService: PlayListService) {
    this.playLists = new Array()
    this.playList = new PlayList();
    this.playList.name="";
    this.playList.description="";
  }
  @Input() playLists: PlayList[]
  ngOnInit() {
    this.loadData()
  }
  loadData() {

  }

  createPlayList() {
    //console.log(this.userService.user.value);
    this.playList.user=this.userService.user.value;
    console.log(this.playList);
    this.playListService.createPlayList(this.playList).subscribe();
  }

}

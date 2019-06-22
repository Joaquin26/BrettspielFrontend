import { Component, OnInit, Input } from '@angular/core';
import { PlayList } from 'src/app/model/play-list';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})
export class PlayListComponent implements OnInit {

  constructor() { }
@Input() playList:PlayList

  ngOnInit() {
  }

}

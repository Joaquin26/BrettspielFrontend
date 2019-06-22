import { Component, OnInit } from '@angular/core';
import { SnackService } from 'src/app/services/snack.service';
import { Snack } from 'src/app/model/Snack';

@Component({
  selector: 'app-snack-list',
  templateUrl: './snack-list.component.html',
  styleUrls: ['./snack-list.component.css']
})
export class SnackListComponent implements OnInit {

  snacks:Snack[];
  constructor(private snackService:SnackService) { }

  ngOnInit() {
    this.loadData();
  }
  loadData(){
    this.snackService.getSnackList().subscribe(snacks=> this.snacks=snacks);
    // this.snackService.getSnackList()
    //   .subscribe(snacks => this.snacks = snacks);
  }

}

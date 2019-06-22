import { Component, OnInit } from '@angular/core';
import { BoardgameService } from '../../services/boardgame.service';
import { BoardGame } from '../../model/Boardgame';
import { Router, ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/model/Category';


@Component({
  selector: 'app-boardgame-list',
  templateUrl: './boardgame-list.component.html',
  styleUrls: ['./boardgame-list.component.css']
})
export class BoardgameListComponent implements OnInit {

  boardgames: BoardGame[];
  minCost: Number;
  maxCost: Number;
  min: Number;
  max: Number;
  minNumberPlayers: Number;
  age: Number;
  boardGameName:String; 
  category: Category;

  constructor(private boardgameService: BoardgameService, private categoryService: CategoryService, private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.min = 0;
    this.max = 200;
    this.minCost = 0;
    this.maxCost = 200;
    this.minNumberPlayers = 1;
    this.age = 8;
  }

  ngOnInit() {
    let categoryName = this.activatedRoute.snapshot.params.category;
    if (categoryName == null)
      this.loadData();
    else {
      this.loadCategory(categoryName);
      this.loadFilterData(categoryName);
    }

  }

  loadData() {
    this.boardgameService.getBoardGameList()
      .subscribe(boardgames => this.boardgames = boardgames);
  }

  loadCategory(categoryName: String) {
    this.categoryService.getCategory(categoryName)
      .subscribe(category => this.category = category);
  }

  loadFilterData(categoryName: String) {
    if (this.minCost == null || this.minCost > 200)
      this.minCost = 0;
    if (this.maxCost == null || this.maxCost > 200 || this.maxCost < this.minCost)
      this.maxCost = 200;
    if(this.boardGameName==null)
      this.boardGameName="";
    this.boardgameService.getBoardGameListFilter(categoryName, this.age, this.minCost, this.maxCost, this.minNumberPlayers,this.boardGameName)
      .subscribe(boardgames => this.boardgames = boardgames);
  }

  public setPlayers(players) {
    this.minNumberPlayers = players;
    this.switchLoadData();
  }

  public setAge(age) {
    this.age = age;
    this.switchLoadData();
  }

  public switchLoadData(){
    if (this.category != null)
      this.loadFilterData(this.category.name);
    else
      this.loadFilterData("");
  }

  public gotoProductDetailsV2(url, name) {
    var myurl = `${url}/${name}`;
    this.router.navigateByUrl(myurl);
  }
}

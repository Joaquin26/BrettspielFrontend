import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from 'src/app/model/Category';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  categories:Category[];
  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.categoryService.getCategoryList()
      .subscribe(categories => this.categories = categories);
  }
}

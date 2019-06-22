import { Component, OnInit,AfterViewInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from 'src/app/services/user.service';
import { PlayListService } from 'src/app/services/play-list.service';
import { PlayList } from 'src/app/model/play-list';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, AfterViewInit {

  constructor(private route: ActivatedRoute,private playListService:PlayListService, private userService:UserService,private router:Router) { this.user=new User()
  this.index=1;
  }
  user:User
  playLists:PlayList
  currentUser:User
  index:Number;
  ngOnInit() {
    this.loadData();
    this.getUser();
  }
  ngAfterViewInit()
  {
    
  }
  loadData()
  {
    this.user=new User();
    this.user.username= this.route.snapshot.paramMap.get("username");
    this.userService.currentUser.subscribe(user => this.currentUser = user)

    console.log(this.user.username)
    console.log(this.currentUser.username)
  }
  getUser()
  {
    this.userService.findByUserName(this.user.username)
    .subscribe(data => {
      if(data!=-1){
      var fakeUser:User= new User()
      fakeUser=data;
      console.log(fakeUser.username)
       if(fakeUser.id==this.currentUser.id)
       {
        this.userService.currentUser.subscribe(user => this.user = user)
         this.userService.user.next(fakeUser)
         this.playListService.getPlayListByUserId(this.user.id).subscribe(data=>this.playLists=data)
        
       }
       else
       {
        this.router.navigateByUrl(`/404`);
       }
      }
      else
      {
        this.router.navigateByUrl(`/404`);
      }
    })
  }
  changeIndex(index)
  {
    this.index=index;
  }
}

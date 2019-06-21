import { Component, OnInit,AfterViewInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { ActivatedRoute } from "@angular/router";
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, AfterViewInit {

  constructor(private route: ActivatedRoute, private userService:UserService) { this.user=new User() }
  user:User
  currentUser:User
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
      if(data!=null){
      var fakeUser:User= new User()
      fakeUser=data;
      console.log(fakeUser.username)
       if(fakeUser.id==this.currentUser.id)
       {
        this.userService.currentUser.subscribe(user => this.user = user)
         this.userService.user.next(fakeUser)
        
       }
       else
       {

       }
      }
    })
  }

}

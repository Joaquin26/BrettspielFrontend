import { Component, OnInit, ViewChild } from '@angular/core';
import { Category } from 'src/app/model/Category';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  categories:Category[];
  user:User;
  @ViewChild('ModalButton',{static: false}) myModal;
  

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.loadData();
    this.checkSession();
    this.userService.currentUser.subscribe(user=>this.user=user)
  }
  checkSession()
  { 
    if(localStorage.getItem("session")!=null)
    {
      let fakeuser=JSON.parse( localStorage.getItem("session"));
      this.userService.user.next(fakeuser)
    }
    else
    { 
      let fakeuser=new User();
      fakeuser.id=-1;
      this.userService.user.next(fakeuser)
    }
  }
  loadData(){
   
  }
  logIn()
  {
    this.userService.logIn(this.user.username,this.user.password)
    .subscribe(data =>{
       var fakeuser = data; localStorage.setItem("session",JSON.stringify( this.user));
        if(fakeuser.id !=-1)
        {
          this.userService.user.next(fakeuser)
          console.log("click")
          document.getElementById("ModalButton").click();
        }
       });
  }

  logOut()
  {
    localStorage.removeItem("session")
    let fakeuser=new User();
    fakeuser.id=-1;
    this.userService.user.next(fakeuser)
  }
}

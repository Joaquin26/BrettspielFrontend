import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Category } from 'src/app/model/Category';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { Membership } from 'src/app/model/MemberShip';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { WebcartService } from 'src/app/services/webcart.service';
import { Subscription } from 'rxjs';
import { Webcart } from 'src/app/model/Webcart';
import { WebcartDetailService } from 'src/app/services/webcartDetail.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit,OnDestroy {
  
  index:Boolean
  categories: Category[];
  user: User;
  subscription: Subscription;
  @ViewChild('ModalButton', { static: false }) myModal;


  constructor(private userService: UserService, private categoryService: CategoryService,private router: Router,private webcartService:WebcartService,private webcartDetailService:WebcartDetailService) { }

  ngOnInit() {
    
    this.index = new Boolean();
    this.index=false;
    this.userService.currentUser.subscribe(user => this.user = user)
    this.checkSession();
    this.loadData()
    
  }
  checkSession() {
    if (localStorage.getItem("session") != null) {
      let fakeuser = JSON.parse(localStorage.getItem("session"));
      this.userService.user.next(fakeuser)
      this.webcartService.assignWebcart(this.user.id)
    }
    else {
      let fakeuser = new User();

      fakeuser.id = -1;
      fakeuser.username="";
      this.userService.user.next(fakeuser)
      this.webcartService.assignWebcart(this.user.id)
    }
  }
  loadData() {
    this.categoryService.getCategoryList()
      .subscribe(categories => this.categories = categories);
  }
  logIn() {
    this.userService.logIn(this.user.username, this.user.password)
      .subscribe(data => {
        var fakeuser = data; localStorage.setItem("session", JSON.stringify(fakeuser));
        if (fakeuser.id != -1) {
          this.userService.user.next(fakeuser)
          if(!this.index){
          document.getElementById("ModalButton").click();
          this.index=false;
          }
          this.webcartService.assignWebcart(this.user.id)
        }
      });
  }

  logOut() {

    var webcart:Webcart;
    webcart=JSON.parse( localStorage.getItem("carrito"))
    this.webcartDetailService.save(webcart);
    let fakeuser = new User();
    fakeuser.id = -1;
    this.userService.user.next(fakeuser)
    this.router.navigateByUrl('/')
    localStorage.removeItem("session")
    localStorage.removeItem("carrito")
  }
  signUp() {
    this.user.id = null;
    this.user.membership = new Membership()
    this.user.membership.id = 1
    this.user.reputation = 0
    this.userService.register(this.user).subscribe(data => {
      if (data !== null) {
        var fakeuser = data;
        if (fakeuser.id == -2) {
          var newUser: User = new User();
          newUser.id = -1;
          this.userService.user.next(newUser)
          alert("Ya existe un usuario con ese nombre de usuario")

        } else {
          if (fakeuser.id == -3) {
            var newUser: User = new User();
            newUser.id = -1;
            this.userService.user.next(newUser)
            alert("Ya existe un usuario con ese email")

          }

        }
      }
      else {
        this.index=true;
        document.getElementById("ModalButtonS").click();
        this.logIn()
      }

    })
  }

  Cuenta()
  {
    this.router.navigateByUrl('/user/'+this.user.username)
  }
  goToCategory(name){
    var myurl = `boardgames/${name}`;
    this.router.navigateByUrl(myurl);
  }
  ngOnDestroy()
  {
    var webcart:Webcart;
    this.webcartService.currentWebcart.subscribe(data=>webcart=data)
    localStorage.setItem("carrito",JSON.stringify(webcart))
  }
  CheckOut()
  { 
    var fakewc:Webcart=JSON.parse(localStorage.getItem("carrito"));
    this.webcartService.webcart.next(fakewc)
    this.router.navigateByUrl('checkout')
  }
  SaveWebcart()
  {
    var fakewc:Webcart=JSON.parse(localStorage.getItem("carrito"));
    this.webcartService.webcart.next(fakewc)
    var webcart:Webcart;
    webcart=JSON.parse( localStorage.getItem("carrito"))
    this.webcartDetailService.save(webcart);
  }
}

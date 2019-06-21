import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardgameComponent } from './components/boardgame/boardgame.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { BoardgameListComponent } from './components/boardgame-list/boardgame-list.component';
import { WebcartComponent } from './components/webcart/webcart.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';
import {UserService} from 'src/app/services/user.service'
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    BoardgameComponent,
    NavBarComponent,
    BoardgameListComponent,
    WebcartComponent,
    UserComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,  
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

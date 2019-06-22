import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardgameComponent } from './components/boardgame/boardgame.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BoardgameListComponent } from './components/boardgame-list/boardgame-list.component';
import { WebcartComponent } from './components/webcart/webcart.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';
import {UserService} from 'src/app/services/user.service';
import { WebcartDetailsListComponent } from './components/checkout/webcart-details-list/webcart-details-list.component';
// tslint:disable-next-line:max-line-length
import { WebcartDetailsBoardgameDetailComponent } from './components/checkout/webcart-details-boardgame-detail/webcart-details-boardgame-detail.component';
import { WebcartCheckoutComponent } from './components/checkout/webcart-checkout/webcart-checkout.component';
// tslint:disable-next-line:max-line-length
import { WebcartDetailsSnackDetailComponent } from './components/checkout/webcart-details-snack-detail/webcart-details-snack-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {RouterModule} from '@angular/router';
import { WebcartService } from './services/webcart.service';
import { WebcartDetailService } from './services/webcartDetail.service';
import { Category } from './model/Category';
import { CategoryService } from './services/category.service';
import { BoardgameService } from './services/boardgame.service';


@NgModule({
  declarations: [
    AppComponent,
    BoardgameComponent,
    NavBarComponent,
    BoardgameListComponent,
    WebcartComponent,
    UserComponent,
    LoginComponent,
    WebcartDetailsListComponent,
    WebcartDetailsBoardgameDetailComponent,
    WebcartCheckoutComponent,
    WebcartDetailsSnackDetailComponent,
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
  providers: [UserService,WebcartService,WebcartDetailService,CategoryService,BoardgameService],
  bootstrap: [AppComponent]
})
export class AppModule { }

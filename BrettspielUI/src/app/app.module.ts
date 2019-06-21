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
import { WebcartDetailsListComponent } from './components/checkout/webcart-details-list/webcart-details-list.component';
// tslint:disable-next-line:max-line-length
import { WebcartDetailsBoardgameDetailComponent } from './components/checkout/webcart-details-boardgame-detail/webcart-details-boardgame-detail.component';
import { WebcartCheckoutComponent } from './components/checkout/webcart-checkout/webcart-checkout.component';
// tslint:disable-next-line:max-line-length
import { WebcartDetailsSnackDetailComponent } from './components/checkout/webcart-details-snack-detail/webcart-details-snack-detail.component';
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
    WebcartDetailsListComponent,
    WebcartDetailsBoardgameDetailComponent,
    WebcartCheckoutComponent,
    WebcartDetailsSnackDetailComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

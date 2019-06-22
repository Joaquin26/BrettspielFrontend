import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardgameComponent } from 'src/app/components/boardgame/boardgame.component';
import { BoardgameListComponent } from 'src/app/components/boardgame-list/boardgame-list.component';
import {WebcartComponent} from 'src/app/components/webcart/webcart.component';
import {WebcartCheckoutComponent} from './components/checkout/webcart-checkout/webcart-checkout.component';
import {UserComponent } from 'src/app/components/user/user.component';
import {SnackListComponent} from 'src/app/components/snack-list/snack-list.component'
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
    { path: '', redirectTo: 'boardgames', pathMatch: 'full' },
    { path: 'boardgame/:name', component: BoardgameComponent },
    { path: 'boardgames', component: BoardgameListComponent },
    { path: 'boardgames/:category', component: BoardgameListComponent },
    { path: 'customer/:id/webcart', component: WebcartComponent },
    { path: 'checkout', component: WebcartCheckoutComponent},
    { path: 'boardgames', component: BoardgameListComponent },
    { path: 'user/:username', component: UserComponent },
    { path: 'snack',component:SnackListComponent},
    { path: '404', component:NotFoundComponent},
    { path: '**', component:NotFoundComponent}
 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
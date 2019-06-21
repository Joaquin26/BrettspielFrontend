import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardgameComponent } from 'src/app/components/boardgame/boardgame.component';
import { BoardgameListComponent } from 'src/app/components/boardgame-list/boardgame-list.component';
import {WebcartComponent} from 'src/app/components/webcart/webcart.component';
import {WebcartCheckoutComponent} from './components/checkout/webcart-checkout/webcart-checkout.component';
import {UserComponent } from 'src/app/components/user/user.component';

const routes: Routes = [
    { path: '', redirectTo: 'boardgames', pathMatch: 'full' },
    { path: 'boardgame/:name', component: BoardgameComponent },
    { path: 'boardgames', component: BoardgameListComponent },
    { path: 'boardgames/:category', component: BoardgameListComponent },
    { path: 'customer/:id/webcart', component: WebcartComponent },
    { path: 'checkout', component: WebcartCheckoutComponent},
    { path: 'boardgames', component: BoardgameListComponent },
    { path: 'user/:username', component: UserComponent }
    // {path:'listar', component:ClientesListaComponent},
    // {path:'nuevo', component:CrearClienteComponent},
    // {path:'detalle', component:ClienteDetalleComponent},
    // {path:'buscar', component:BuscarClienteComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
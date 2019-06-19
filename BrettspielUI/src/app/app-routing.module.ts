import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardgameComponent } from 'src/app/components/boardgame/boardgame.component';
import { BoardgameListComponent } from 'src/app/components/boardgame-list/boardgame-list.component'


const routes: Routes = [
    { path: '', redirectTo: 'boardgames', pathMatch: 'full' },
    { path: 'boardgame/:id', component: BoardgameComponent },
    { path: 'boardgames', component: BoardgameListComponent }
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
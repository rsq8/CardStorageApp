import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCardComponent } from './add-card/add-card.component';
import { ListCardsComponent } from './list-cards/list-cards.component';
import { CardDetailComponent } from './card-detail/card-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/add-card', pathMatch:'full'},
  {path: 'add-card', component: AddCardComponent},
  {path: 'list-cards', component: ListCardsComponent,  pathMatch: 'full'},
  {path: 'list-cards/:id', component: CardDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

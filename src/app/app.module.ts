import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCardComponent } from './add-card/add-card.component';
import { ListCardsComponent } from './list-cards/list-cards.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { cardReducer } from './reducers/card.reducer';

@NgModule({
  declarations: [
    AppComponent,
    AddCardComponent,
    ListCardsComponent,
    CardDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      card: cardReducer
    }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

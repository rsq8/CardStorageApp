import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
import { CardsService } from '../cards.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';


@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit {
  cards: Observable<Card []>;
  cardinject: Card[] = [];

  constructor(private store: Store<AppState>, private service: CardsService) {
    //ngrx state management
    this.cards = store.select('card');
   }

  ngOnInit(): void {
    //to check that the angular card service works
    this.cardinject = this.service.getCards();
  }

}

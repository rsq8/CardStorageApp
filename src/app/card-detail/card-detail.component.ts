import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeCards } from '../place-holder';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  cardArray: Card [] = [];
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.cardArray = fakeCards;
  }

  onDeleteClicked(cardNumber: string): void{
    alert(`deleting card ${cardNumber}`);
  }

}

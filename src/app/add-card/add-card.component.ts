import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Card } from '../models/card.model';
import { AppState } from '../app.state';
import * as CardActions from '../actions/card.actions';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {
  cards: Observable<Card[]>;
  card_number: string = '';
  card_holder: string = '';
  exp_date: string = '';
  CCV: string = '';
  amount: number = 1;

  constructor(
    private router: Router, private store: Store<AppState>,
    private service: CardsService,
  ) {this.cards = store.select('card')}

  ngOnInit(): void {
    //this.cards = this.store.select('card')
  }

  onButtonClicked(): void{
    let date = new Date(this.exp_date);
    let today = new Date();
    //input validation logic
    if(!this.card_number || !this.card_holder){
      alert('Please Enter a valid card name or number and try again');
    }
    else if(this.amount < 100){
      alert('The minimum purchase value is 100NGN');
    }
    else if(date < today || !this.exp_date){
      alert('Check the expiry date, please use a valid card');
    }
    else{
      //ngrx state management logic
      this.store.dispatch(new CardActions.AddCard({
        id: '',
        card_number: this.card_number, 
        card_holder: this.card_holder,
        exp_date: this.exp_date,
        CCV: this.CCV,
        amount: this.amount,
      }));
      //http POST request logic
      this.service.addCard(this.card_number, this.card_holder, this.exp_date, this.CCV, this.amount).subscribe(
        () => {
          this.router.navigateByUrl('/list-cards');
        }
      )
      //Notification on success and optional redirect to a new page 
      alert('your card has been added succesfully');
      //this.router.navigateByUrl('/list-cards');
    }
  }

  onDelete(id) {
    this.store.dispatch(new CardActions.RemoveCard(id));
  } 

}

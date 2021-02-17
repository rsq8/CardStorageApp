import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { fakeCards } from './place-holder';
import { Card } from './models/card.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient, ) { }

  getCards(): Card[]{
    //place holder to test service
    return fakeCards;
  }

  //POST request to server, see proxy.json.config
  addCard(card_number: string, card_holder: string, exp_date: string, CCV: string, amount: number): Observable<Card>{
    return this.http.post<Card>(
      '/api/cards', {card_number, card_holder, exp_date, CCV, amount},
      httpOptions,
    );
  }
}

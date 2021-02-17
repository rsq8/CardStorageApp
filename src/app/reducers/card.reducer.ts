import { Action } from '@ngrx/store';
import { Card } from '../models/card.model';
import * as CardActions from '../actions/card.actions';

export function cardReducer(state: Card[] = [], action: CardActions.Actions) {
    switch(action.type){
        case CardActions.ADD_CARD:
            return[...state, action.payload];

        case CardActions.REMOVE_CARD:
            return state.filter(Card => Card.card_number !== action.payload);

        default:
            return state;
    }
}
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Card } from '../models/card.model';

export const ADD_CARD = '[CARD] Add';
export const REMOVE_CARD = '[CARD] Remove';

export class AddCard implements Action{
    readonly type = ADD_CARD;

    constructor(public payload: Card){}
}

export class RemoveCard implements Action{
    readonly type = REMOVE_CARD;

    constructor(public payload: Card["card_number"]){}
}

export type Actions = AddCard | RemoveCard;
import { createReducer } from 'redux-act';
import uuidv4 from 'uuid/v4';
import * as R from 'ramda';

import {
  addList,
  changeListTitle,
  removeList,
  addCard,
  removeCard,
  changeCardTitle,
  changeCardDescr,
} from '../actions/index';

export const initialState = {
  lists: [
    {
      id: uuidv4(),
      title: '',
      type: 'listCreator',
    },
  ],
};

export default createReducer(
  {
    [addList]: (state, payload) => ({
      ...state,
      lists: R.insert(state.lists.length - 1, payload, state.lists),
    }),
    [changeListTitle]: (state, payload) => ({
      ...state,
      lists: R.map(
        item => (R.equals(item.id, payload.listId)
          ? {
            ...item,
            title: payload.title,
          }
          : item),
      )(state.lists),
    }),
    [removeList]: (state, payload) => ({
      ...state,
      lists: R.filter(item => R.not(R.equals(item.id, payload)), state.lists),
    }),
    [addCard]: (state, payload) => ({
      ...state,
      lists: R.map(
        item => (R.equals(item.id, payload.listId)
          ? {
            ...item,
            cards: item.cards.concat(payload),
          }
          : item),
      )(state.lists),
    }),
    [removeCard]: (state, payload) => ({
      ...state,
      lists: R.map(
        item => (R.equals(item.id, payload.listId)
          ? {
            ...item,
            cards: R.filter(card => R.not(card.id === payload.id))(item.cards),
          }
          : item),
      )(state.lists),
    }),
    [changeCardTitle]: (state, payload) => ({
      ...state,
      lists: R.map(
        item => (R.equals(item.id, payload.listId)
          ? {
            ...item,
            cards: R.map(
              card => (R.equals(card.id, payload.id)
                ? {
                  ...card,
                  title: payload.title,
                }
                : card),
            )(item.cards),
          }
          : item),
      )(state.lists),
    }),
    [changeCardDescr]: (state, payload) => ({
      ...state,
      lists: R.map(
        item => (R.equals(item.id, payload.listId)
          ? {
            ...item,
            cards: R.map(
              card => (R.equals(card.id, payload.id)
                ? {
                  ...card,
                  description: payload.description,
                }
                : card),
            )(item.cards),
          }
          : item),
      )(state.lists),
    }),
  },
  initialState,
);

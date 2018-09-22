import { createSelector } from 'reselect';
import { getLists } from './lists';

export const getCards = (state, props) => props;

export const getCardForUpdate = createSelector(
  [getLists, getCards],
  (lists, oldCard) => lists
    .filter(list => list.id === oldCard.listId)[0]
    .cards.filter(item => item.id === oldCard.id)[0],
);

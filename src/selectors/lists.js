import { createSelector } from 'reselect';

export const getLists = state => state.lists.lists;
export const takeListId = (state, props) => props.id;

export const getOneList = createSelector(
  [getLists, takeListId],
  (lists, id) => lists.filter(item => item.id === id)[0],
);

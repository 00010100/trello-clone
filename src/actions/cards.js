import { createAction } from 'redux-act';

export const addCard = createAction('Add card');
export const removeCard = createAction('Delete card');
export const changeCardTitle = createAction('Change card title');
export const changeCardDescr = createAction('Change card description');

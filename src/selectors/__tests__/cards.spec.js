/* eslint no-undef: 0 */
import * as selectors from '../cards';

const state = {
  lists: {
    lists: [
      {
        id: 5,
        title: 'some list',
        cards: [],
      },
      {
        id: 7,
        title: 'other list',
        cards: [
          {
            listId: 7,
            id: 10,
            title: 'some card title',
            description: '',
          },
        ],
      },
    ],
  },
};

const props = {
  listId: 7,
  id: 10,
  title: 'some card title',
  description: '',
};

describe('cards selector', () => {
  it('should return getCards', () => {
    expect(selectors.getCards(state, props)).toEqual(props);
  });

  it('should return getCardForUpdate', () => {
    expect(selectors.getCardForUpdate(state, props)).toEqual(state.lists.lists[1].cards[0]);
  });
});

/* eslint no-undef: 0 */
import * as selectors from '../lists';

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

const props = { id: 7 };

describe('lists selector', () => {
  it('should return getLists', () => {
    expect(selectors.getLists(state)).toEqual(state.lists.lists);
  });

  it('should return takeListId', () => {
    expect(selectors.takeListId(state, props)).toEqual(7);
  });

  it('should return getOneList', () => {
    expect(selectors.getOneList(state, props)).toEqual(state.lists.lists[1]);
  });
});

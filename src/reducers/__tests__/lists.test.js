/* eslint no-undef: 0 */
import reducer, { initialState } from '../lists';
import * as listActions from '../../actions/lists';

const lists = [
  {
    id: 5,
    title: 'some list',
    cards: [],
  },
  {
    id: 7,
    title: 'other list',
    cards: [],
  },
];

describe('lists reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle add list action', () => {
    const list = {
      id: 4,
      title: 'new list',
      cards: [],
    };

    const updatedLists = [
      {
        id: 5,
        title: 'some list',
        cards: [],
      },
      {
        id: 4,
        title: 'new list',
        cards: [],
      },
      {
        id: 7,
        title: 'other list',
        cards: [],
      },
    ];

    expect(reducer({ lists }, listActions.addList(list))).toEqual({
      lists: updatedLists,
    });
  });

  it('should change title on list', () => {
    const list = {
      listId: 7,
      title: 'new title',
    };

    const updatedList = [
      {
        id: 5,
        title: 'some list',
        cards: [],
      },
      {
        id: 7,
        title: 'new title',
        cards: [],
      },
    ];

    expect(reducer({ lists }, listActions.changeListTitle(list))).toEqual({ lists: updatedList });
  });

  it('should not change title on list with wrong id', () => {
    const list = {
      listId: 3,
      title: 'new title',
    };

    expect(reducer({ lists }, listActions.changeListTitle(list))).toEqual({ lists });
  });

  it('should remove list action', () => {
    const singleList = {
      id: 7,
      title: 'other list',
      cards: [],
    };

    expect(reducer({ lists }, listActions.removeList(5))).toEqual({ lists: [singleList] });
  });

  it('should not remove list action with wrong id', () => {
    const wrongId = 3;

    expect(reducer({ lists }, listActions.removeList(wrongId))).toEqual({ lists });
  });
});

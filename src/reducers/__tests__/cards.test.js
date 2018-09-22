/* eslint no-undef: 0 */
import reducer from '../lists';
import * as cardActions from '../../actions/cards';

const lists = [
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
];

describe('cards reducer', () => {
  it('should add card action', () => {
    const card = {
      listId: 5,
      id: 9,
      title: 'some card',
      description: '',
    };

    const updatedLists = [
      {
        id: 5,
        title: 'some list',
        cards: [
          {
            listId: 5,
            id: 9,
            title: 'some card',
            description: '',
          },
        ],
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
    ];

    expect(reducer({ lists }, cardActions.addCard(card))).toEqual({ lists: updatedLists });
  });

  it('should remove card action', () => {
    const card = {
      listId: 7,
      id: 10,
    };

    const updatedLists = [
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

    expect(reducer({ lists }, cardActions.removeCard(card))).toEqual({ lists: updatedLists });
  });

  it('should change card title', () => {
    const card = {
      listId: 7,
      id: 10,
      title: 'new title',
      description: '',
    };

    const updatedlists = [
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
            title: 'new title',
            description: '',
          },
        ],
      },
    ];

    expect(reducer({ lists }, cardActions.changeCardTitle(card))).toEqual({ lists: updatedlists });
  });

  it('should change card description', () => {
    const card = {
      listId: 7,
      id: 10,
      title: 'some card title',
      description: 'have a description',
    };

    const updatedlists = [
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
            description: 'have a description',
          },
        ],
      },
    ];

    expect(reducer({ lists }, cardActions.changeCardDescr(card))).toEqual({ lists: updatedlists });
  });
});

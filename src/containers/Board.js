import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';
import PropTypes from 'prop-types';

import {
  addList, changeListTitle, removeList, addCard, changeCardTitle,
} from '../actions/index';
import List from './List';
import { isRealString } from '../utils/index';
import { getLists } from '../selectors/index';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  addNewList = (title) => {
    const { addList } = this.props;

    if (isRealString(title)) {
      const data = {
        id: uuidv4(),
        title,
        cards: [],
      };

      addList(data);
    }
  };

  changeListTitle = (data) => {
    const { changeListTitle } = this.props;

    changeListTitle(data);
  };

  deleteList = (id) => {
    const { removeList } = this.props;

    removeList(id);
  };

  addCard = (listId, title) => {
    const { addCard } = this.props;

    if (isRealString(title)) {
      const data = {
        id: uuidv4(),
        listId,
        title,
        description: '',
      };

      addCard(data);
    }
  };

  renderList = (list) => {
    const { lists } = this.props;

    return (
      <List
        listsLength={lists.length}
        list={list}
        key={list.id}
        deleteList={this.deleteList}
        toDetails={this.toDetails}
        changeListTitle={this.changeListTitle}
        addCard={this.addCard}
        listCreator={!!list.type}
        moveList={this.moveList}
        addNewList={this.addNewList}
      />
    );
  };

  render() {
    const { lists } = this.props;

    return (
      <div className="board-wrapper">
        <div className="board-main-content">
          <div className="board-canvas">
            <div id="board">{lists.map(list => this.renderList(list))}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: getLists(state),
});

const mapDispatchToProps = {
  addList,
  changeListTitle,
  removeList,
  changeCardTitle,
  addCard,
};

Board.propTypes = {
  lists: PropTypes.instanceOf(Array),
  addList: PropTypes.func,
  addCard: PropTypes.func,
  changeListTitle: PropTypes.func,
  removeList: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Board);

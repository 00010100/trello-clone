import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { isRealString } from '../utils/index';
import ListAdd from '../components/ListAdd';
import CardsContainer from './CardsContainer';
import CardAddBtn from '../components/CardAddBtn';
import StyledList from '../styles/containers/StyledList';
import MyTextarea from '../components/Textarea';

export class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      listTitle: props.list.title,
    };
  }

  addActive = () => {
    this.setState({ active: true });
  };

  removeActive = () => {
    this.setState({ active: false });
  };

  editTitle = (e) => {
    this.setState({
      listTitle: e.target.value,
    });
  };

  changeListTitle = (e) => {
    const { changeListTitle, list } = this.props;

    if (isRealString(e.target.value)) {
      changeListTitle({ id: list.id, title: e.target.value });
    }
  };

  handleFocus = (e) => {
    e.target.select();
  };

  finishEditing = (e) => {
    const { changeListTitle, list } = this.props;

    if (e.key === 'Enter') {
      e.target.blur();
      changeListTitle({ id: list.id, title: e.target.value });
    }
  };

  render() {
    const {
      listCreator,
      list,
      addNewList,
      listsLength,
      deleteList,
      addCard,
      toDetails,
    } = this.props;
    const { active, listTitle } = this.state;

    return (
      <div className="list-wrapper">
        <StyledList listCreator={listCreator}>
          {listCreator ? (
            <ListAdd
              addActive={this.addActive}
              removeActive={this.removeActive}
              active={active}
              addNewList={addNewList}
              finishEditing={this.finishEditing}
              listsLength={listsLength}
            />
          ) : (
            <div className="list">
              <div className="list-header">
                <MyTextarea
                  value={listTitle}
                  autoFocus={active}
                  onBlur={this.changeListTitle}
                  onChange={this.editTitle}
                  onFocus={this.handleFocus}
                  onKeyPress={this.finishEditing}
                />
                <button
                  type="button"
                  className="close-btn abs-pos"
                  onClick={() => deleteList(list.id)}
                />
              </div>
              <div className="cards-container">
                <div className="card-wrapper">
                  <CardsContainer cards={list.cards} toDetails={toDetails} list={list} />
                </div>
              </div>
              <CardAddBtn
                list={list}
                addActive={this.addActive}
                removeActive={this.removeActive}
                active={active}
                addCard={value => addCard(list.id, value)}
              />
            </div>
          )}
        </StyledList>
      </div>
    );
  }
}

List.propTypes = {
  listCreator: PropTypes.bool,
  list: PropTypes.instanceOf(Object),
  listsLength: PropTypes.number,
  addNewList: PropTypes.func,
  changeListTitle: PropTypes.func,
  deleteList: PropTypes.func,
  addCard: PropTypes.func,
  toDetails: PropTypes.func,
};

export default List;

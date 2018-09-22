import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import StyledCardBtn from '../styles/components/StyledCardBtn';
import PlusIcon from './PlusIcon';
import ListControls from './ListControls';
import MyTextarea from './Textarea';
import { isRealString } from '../utils/index';

export class CardAddBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  finishingEdit = (e) => {
    const { value } = this.state;

    if (e.key === 'Enter') {
      if (isRealString(value)) {
        this.createCard(value);
      }
    }
  };

  createCard = () => {
    const { addCard } = this.props;
    const { value } = this.state;

    addCard(value);
    this.setState({ value: '' });
    ReactDOM.findDOMNode(this.textarea).focus();
  };

  getTextareaRef = (node) => { this.textarea = node; }

  render() {
    const {
      active,
      addActive,
      removeActive,
      list,
    } = this.props;
    const { value } = this.state;

    let cardBtn = '';
    if (active) {
      cardBtn += ' active';
    }

    return (
      <StyledCardBtn className={cardBtn}>
        {!active && (
          <button type="button" onClick={addActive} className="card-add-btn">
            <PlusIcon color="#798d99" style={{ marginRight: `2px` }} />
            <span className="text-btn">
              {list && list.cards && list.cards.length > 0 ? 'Add another card' : 'Add a card'}
            </span>
          </button>
        )}
        {active && (
          <div className="card-add-form">
            <MyTextarea
              ref={this.getTextareaRef}
              value={value}
              placeholder="Enter a title for this card..."
              onChange={this.handleChange}
              onKeyPress={this.finishingEdit}
              autoFocus={active}
            />
            <ListControls cta="Add Card" removeActive={removeActive} create={this.createCard} />
          </div>
        )}
      </StyledCardBtn>
    );
  }
}

CardAddBtn.propTypes = {
  active: PropTypes.bool,
  addActive: PropTypes.func,
  addCard: PropTypes.func,
  removeActive: PropTypes.func,
  list: PropTypes.instanceOf(Object),
};

export default CardAddBtn;

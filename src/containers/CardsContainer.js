import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '../components/Card';

export class CardsContainer extends Component {
  renderCard = (card) => {
    const { list } = this.props;

    return <Card card={card} key={card.id} list={list} />;
  };

  render() {
    const { cards } = this.props;

    return <div>{cards && cards.length >= 1 && cards.map(item => this.renderCard(item))}</div>;
  }
}

CardsContainer.propTypes = {
  cards: PropTypes.instanceOf(Array),
  list: PropTypes.instanceOf(Object),
};

export default CardsContainer;

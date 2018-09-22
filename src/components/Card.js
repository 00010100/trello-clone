import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';

import StyledCard from '../styles/components/StyledCard';
import { isRealString } from '../utils/index';

export const Card = ({ card, removeCard, list }) => (
  <StyledCard>
    <div>
      <Link
        to={{
          pathname: `/detail/${card.id}`,
          state: {
            modal: true,
            card,
            removeCard,
            list,
          },
        }}
        className="card-link"
      >
        <div />
        <div>
          <p className="card-title">{card.title}</p>
          {isRealString(card.description) && <FontAwesomeIcon icon={faAlignLeft} />}
        </div>
      </Link>
    </div>
  </StyledCard>
);

Card.propTypes = {
  card: PropTypes.instanceOf(Object),
  removeCard: PropTypes.func,
  list: PropTypes.instanceOf(Object),
};

export default Card;

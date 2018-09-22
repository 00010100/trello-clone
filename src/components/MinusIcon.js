import React from 'react';
import PropTypes from 'prop-types';

import StyledMinusIcon from '../styles/components/StyledMinusIcon';

const MinusIcon = ({ color, style }) => <StyledMinusIcon color={color} style={style} />;

MinusIcon.propTypes = {
  color: PropTypes.string,
  style: PropTypes.instanceOf(Object),
};

export default MinusIcon;

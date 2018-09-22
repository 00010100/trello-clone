import React from 'react';
import PropTypes from 'prop-types';

import StyledPlusIcon from '../styles/components/StyledPlusIcon';

const PlusIcon = ({ color, style }) => <StyledPlusIcon color={color} style={style} />;

PlusIcon.propTypes = {
  color: PropTypes.string,
  style: PropTypes.instanceOf(Object),
};

export default PlusIcon;

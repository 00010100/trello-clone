import React from 'react';
import PropTypes from 'prop-types';

const ListControls = ({ removeActive, create, cta }) => (
  <div className="list-controls">
    <button type="button" className="add-btn" onClick={create}>
      {cta}
    </button>
    <button type="button" className="close-btn" onClick={removeActive} />
  </div>
);

ListControls.propTypes = {
  removeActive: PropTypes.func,
  create: PropTypes.func,
  cta: PropTypes.string,
};

export default ListControls;

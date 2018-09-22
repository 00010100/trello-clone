import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PlusIcon from './PlusIcon';
import ListControls from './ListControls';

export class ListAdd extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  finishEditing = (e) => {
    const { addNewList } = this.props;

    const input = e.target;

    if (e.key === 'Enter') {
      addNewList(input.value);
      this.setState({ value: '' });
      input.focus();
    }
  };

  addList = (title) => {
    const { addNewList } = this.props;

    addNewList(title);
    this.setState({ value: '' });
    this.textInput.focus();
  };

  closeEdit = () => {
    const { removeActive } = this.props;

    this.setState({ value: '' });
    removeActive();
  };

  render() {
    const { addActive, active, listsLength } = this.props;
    const { value } = this.state;

    let listForm = 'list-form';
    if (active) {
      listForm += ' active';
    }

    return (
      <div className={listForm}>
        {!active && (
          <button type="button" className="list-btn" onClick={addActive}>
            <PlusIcon color="rgba(255, 255, 255, 0.8)" style={{ marginRight: '5px' }} />
            {listsLength > 1 ? 'Add another list' : 'Add a list'}
          </button>
        )}
        <input
          ref={(input) => { this.textInput = input; }}
          name="input-list-add"
          className="list-input"
          placeholder="Enter list title..."
          type="text"
          value={value}
          onKeyPress={this.finishEditing}
          onChange={this.handleChange}
          style={active ? { display: 'block' } : { display: 'none' }}
        />
        {active && (
          <ListControls
            cta="Add List"
            removeActive={this.closeEdit}
            create={() => this.addList(value)}
          />
        )}
      </div>
    );
  }
}

ListAdd.propTypes = {
  addNewList: PropTypes.func,
  removeActive: PropTypes.func,
  addActive: PropTypes.func,
  active: PropTypes.bool,
  listsLength: PropTypes.number,
};

export default ListAdd;

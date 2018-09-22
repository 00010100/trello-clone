import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { removeCard, changeCardTitle, changeCardDescr } from '../actions/index';
import { getCardForUpdate, getOneList } from '../selectors/index';
import { isRealString } from '../utils/index';
import StyledCardDetail from '../styles/containers/StyledCardDetail';
import MinusIcon from '../components/MinusIcon';
import MyTextarea from '../components/Textarea';
import ListControls from '../components/ListControls';

class CardDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.card ? props.card.title : '',
      description: props.card ? props.card.description : '',
      edit: false,
    };

    this.descrArea = React.createRef();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submit = (e) => {
    if (e.key === 'Enter') {
      e.target.blur();
      this.changeCardInfo();
    }
  };

  changeCardInfo = () => {
    const { card, list, changeCardTitle } = this.props;
    const { title } = this.state;

    if (isRealString(title)) {
      const data = {
        id: card.id,
        listId: list.id,
        title,
        description: card.description,
      };

      changeCardTitle(data);
    }
  };

  back = (e) => {
    const { history } = this.props;
    e.stopPropagation();
    history.goBack();
  };

  delete = () => {
    const {
      removeCard, history, list, card,
    } = this.props;

    removeCard({ id: card.id, listId: list.id });
    history.goBack();
  };

  saveDescription = () => {
    const { card, list, changeCardDescr } = this.props;
    const { description } = this.state;

    const data = {
      id: card.id,
      listId: list.id,
      title: card.title,
      description,
    };

    changeCardDescr(data);

    this.setState({ edit: false });
  };

  startEdit = () => {
    this.setState({ edit: true });
  };

  stopEdit = () => {
    const { card } = this.props;

    this.setState({
      edit: false,
      description: card.description,
    });
  };

  renderDescription = () => {
    const { edit, description } = this.state;

    if (!edit) {
      if (!isRealString(description)) {
        return (
          <div>
            <span className="card-description-label">Description</span>
            <button className="card-description-btn" type="button" onClick={this.startEdit}>
              <p>Add a more detailed description...</p>
            </button>
          </div>
        );
      }

      return (
        <div className="descr-title-wrap">
          <span className="card-description-label">Description</span>
          <button className="edit-btn-label" type="button" onClick={this.startEdit}>
            Edit
          </button>
          <button className="edit-btn" type="button" onClick={this.startEdit}>
            <p>{description}</p>
          </button>
        </div>
      );
    }

    return (
      <div>
        <span className="card-description-label">Description</span>
        <MyTextarea
          name="description"
          placeholder="Add a more detailed description..."
          value={description}
          autoFocus={edit}
          onClick={this.startEdit}
          onChange={this.handleChange}
          className={edit ? 'active' : ''}
        />
        <ListControls cta="Save" removeActive={this.stopEdit} create={this.saveDescription} />
      </div>
    );
  };

  render() {
    const { list } = this.props;
    const { title } = this.state;

    return (
      <StyledCardDetail>
        <div className="card-modal">
          <div className="card-content">
            <div className="card-content-left">
              <div className="card-header-container">
                <MyTextarea
                  name="title"
                  value={title}
                  className="card-title"
                  onBlur={this.changeCardInfo}
                  onChange={this.handleChange}
                  onKeyPress={this.submit}
                />
                <p className="card-subtitle">{`in list ${list.title}`}</p>
              </div>
              <div className="card-description-container">{this.renderDescription()}</div>
            </div>
            <div className="card-content-right">
              <p>ACTIONS</p>
              <button type="button" className="delete-btn" onClick={this.delete}>
                <MinusIcon color="#fff" />
                Remove
              </button>
            </div>
          </div>
          <button type="button" className="close-btn top-right" onClick={this.back} />
        </div>
      </StyledCardDetail>
    );
  }
}

CardDetail.propTypes = {
  history: PropTypes.instanceOf(Object),
  card: PropTypes.instanceOf(Object),
  list: PropTypes.instanceOf(Object),
  title: PropTypes.string,
  description: PropTypes.string,
  removeCard: PropTypes.func,
  changeCardTitle: PropTypes.func,
  changeCardDescr: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  card: getCardForUpdate(state, props.location.state.card),
  list: getOneList(state, props.location.state.list),
});

export default connect(
  mapStateToProps,
  { removeCard, changeCardTitle, changeCardDescr },
)(CardDetail);

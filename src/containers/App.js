import React, { Component } from 'react';
import {
  Route, withRouter, Switch, Redirect,
} from 'react-router-dom';

import Board from './Board';
import CardDetail from './CardDetail';
import StyledBoard from '../styles/containers/StyledBoard';
import NoMatch from './NoMatch';

class App extends Component {
  // eslint-disable-next-line
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    const { location } = this.props;

    if (nextProps.history.action !== 'POP' && (!location.state || !location.state.modal)) {
      this.previousLocation = location;
    }
  }

  render() {
    const { location } = this.props;

    const isModal = !!(
      location.state
      && location.state.modal
      && this.previousLocation !== location
    );

    return (
      <StyledBoard>
        <Switch location={isModal ? this.previousLocation : location}>
          <Redirect exact from="/index.html" to="/" />
          <Route exact path="/" component={Board} />
          <Route component={NoMatch} />
        </Switch>
        {isModal ? (
          <Route exact path="/detail/:id" component={props => <CardDetail {...props} />} />
        ) : null}

      </StyledBoard>
    );
  }
}

export default withRouter(App);

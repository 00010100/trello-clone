import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import './styles/index';
import App from './containers/App';
import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  global.document.getElementById('root'),
);

registerServiceWorker();

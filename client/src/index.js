import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import ConnectedApp from './containers/ConnectedApp';
import registerServiceWorker from './registerServiceWorker';

import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

const history = createBrowserHistory()

const store = createStore(
	connectRouter(history)(rootReducer),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(applyMiddleware(routerMiddleware(history), thunk)),
  applyMiddleware(thunk)
);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
  	<ConnectedApp history={history} />
  </Provider>, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import ConnectedApp from './containers/ConnectedApp';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
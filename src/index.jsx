// libraries
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
// components
import App from './App';
// styles
import 'styles/scss/index.scss';
// services
import { store, persistor } from 'reducers/config/store';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

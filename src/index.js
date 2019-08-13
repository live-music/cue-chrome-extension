import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/index';

import './styles.css';

import LoginOrApp from './Components/LoginOrApp';

const App = () => {
  return (
    <div className='App'>
      <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor }>
          <LoginOrApp />
        </PersistGate>
      </Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

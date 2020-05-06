import React from 'react';
import Game from './Game';
import { Provider } from "react-redux";
import configureStore from '../redux/configureStore';

const store = configureStore();

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <Game />
      </div>
    </Provider>
    
  );
}

export default App;

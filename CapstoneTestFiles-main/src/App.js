import React, { Component } from 'react';
import MainComponent from './components/MainComponent';
import './App.css';
import { MemoryRouter } from 'react-router-dom';
import {Provider} from 'react-redux';


class App extends Component{

  render() {
      return (
        <Provider store={store}>
          <MemoryRouter>
            <div>   
              <MainComponent/>
            </div>
          </MemoryRouter>
        </Provider>
    );
  }
}

export default App;
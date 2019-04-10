import React, { Component } from 'react';
import './App.css';
//import font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
//import Components
import LandingPage from './components/LandingPage'

//add FA icons to library to be used app-wide
library.add(faSearch);


class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }
}

export default App;

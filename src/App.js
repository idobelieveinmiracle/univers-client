import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar  from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;

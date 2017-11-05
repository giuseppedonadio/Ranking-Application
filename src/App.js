import React, { Component } from 'react';
import TeamList from './components/TeamList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container" >
          <TeamList/>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Player from './components/Player';
//import Stats from './components/Stats';

class App extends Component {

  state = {
      isloading : true,
      players: []
  };
  componentDidMount = () => {
    fetch('http://localhost:3001/data/player-stats.json')
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(resp => 
      this.setState ({
        players: resp.players
      })
    )
    .catch('something went wrong players data not loaded')
  }
  handleChange = (event) => {
    event.preventDefault();
    // fetch('./data/player-stats.json')
    // .then(res => console.log(res))
  }
  render (){
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Player
          player={this.state.players}
          onChange = {this.handleChange}

        />
        {/* <Stats /> */}
      </div>
    );
  }
}

  export default App;
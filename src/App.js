import React, { Component } from 'react';
import './App.css';
import Player from './components/Player';
import data from './data/player-stats'
//import Stats from './components/Stats';

class App extends Component {

  state = {
      isloading : true,
      data: data.players,
      playerSelected: null
  };
  
  playerSelect = (event) => {
    event.preventDefault();
    const [filterPlayer] = this.state.data.filter((item) => item.player.id === parseInt(event.target.value));
    console.log(filterPlayer);
    this.setState({playerSelected:filterPlayer});
    filterPlayer.stats.map( item => {
      if(item.name === "appearances"){
        console.log(item.value);
      }
      return item.value;
    })
  }
  render (){
    //console.log(this.state);
    return (
      <div className="App">
        <Player
          player={this.state.data}
          onChange = {this.playerSelect}

        />
        {/* <Stats /> */}
      </div>
    );
  }
}

  export default App;
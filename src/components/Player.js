import React from 'react';
import Stats from './Stats';

const Player = ({onChange, player}) => {
  //console.log(player);
  return (
  <form>
    <select onChange={onChange}>
      <option value="0">Select a player :</option>
      {player.map((item, idx) => <option value={item.player.id} key={idx}>{`${item.player.name.first}${item.player.name.last}`}</option>
      )}
    </select>
  <Stats /> 
  </form>
)}

export default Player;
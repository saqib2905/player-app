import React from 'react';

const Player = ({onChange, player}) => {
  console.log(player);
  return (
  <form>
    <select onChange={onChange}>
      <option value="0">Select a player :</option>
      {player.map((player, idx) => <option value={idx} key={player.player.id}>{`${player.player.name.first}${player.player.name.last}`}</option>
      )}
    </select>
  </form> 
)}

export default Player;
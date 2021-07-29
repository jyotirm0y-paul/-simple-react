import React, { useEffect, useState } from 'react';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';
import Players from './../Players/Players'
import './Team.css'
const Team = () => {

  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  


const handleAddPlayer = (player) => {
  const newSelectedPlayer = [...selectedPlayer, player];
  setSelectedPlayer(newSelectedPlayer);

  
}



  useEffect(() => {
    fetch('https://api.mocki.io/v1/dba421dc')
      .then(res => res.json())
      .then(data => setPlayers(data))
      .catch(error => console.log(error))
  }, [])



  return (
    <div className="team-container">
      <div className="player-container">
      
      {
        players.map(player => <Players handleAddPlayer = {handleAddPlayer} player={player}></Players>)
      }
    </div>
    <div>
      <SelectedPlayer selectedPlayer={selectedPlayer}></SelectedPlayer>
    </div>
    </div>

  );
};

export default Team;
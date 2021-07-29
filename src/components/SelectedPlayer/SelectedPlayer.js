import React from 'react';

const SelectedPlayer = (props) => {
const selectedPlayer = props.selectedPlayer;
console.log(selectedPlayer);
const totalSalary = selectedPlayer.reduce((total, plr) => total + plr.salary, 0);

  
  return (
    <div>
      <h4>Players selected: {selectedPlayer.length}</h4>
      <h4>Total Budget:{totalSalary}</h4>
    </div>
  );
};

export default SelectedPlayer;
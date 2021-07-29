import React from 'react';
import './Players.css'
import 'bootstrap/dist/css/bootstrap.css';

const Players = (props) => {
  console.log(props);
  
  const { name,  salary, image } = props.player
  return (
    
      <div className="player">
        <h3>{name}</h3>
        <h4>salary: {salary} </h4>
        <img src={image} alt=""  />
        <br />
        <button className="main-button btn-outline-danger" onClick = {() => props.handleAddPlayer(props.player)}>Add Me</button>

      </div>
     
    
  );
};

export default Players;
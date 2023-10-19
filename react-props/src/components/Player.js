import React from 'react'

const Player = (props) => {
  
  return (
    <>
      <h3>Currently on: {props.currentEpisode}</h3>
      <button onClick={props.triggerNextEpisode}>Next Episode</button>
    </>
  )
}

export default Player
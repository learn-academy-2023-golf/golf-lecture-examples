import React, { useState } from 'react'
import Episode from './components/Episode'
import './App.css'
import Player from './components/Player'

const App = () => {
  const episodes = ["Goodbye, Michael","Threat Level Midnight","Stress Relief","Andy's Ancestry", "Niagara: Part 2"]

  const [currentEpisode, setCurrentEpisode] = useState(episodes[0])

  const triggerNextEpisode = () => {
    let nextEpisode = Math.floor(Math.random() * episodes.length)
    console.log(nextEpisode)
    setCurrentEpisode(episodes[nextEpisode])
  }

  return (
    <>
      <h1>The Office</h1>
      <div className='cards'>
        {episodes.map((episode, index) => {
          return <Episode title={episode} key={index}/>
        })}
      </div>
      <Player 
        currentEpisode={currentEpisode} 
        triggerNextEpisode={triggerNextEpisode}/>
    </>
  )
}

export default App

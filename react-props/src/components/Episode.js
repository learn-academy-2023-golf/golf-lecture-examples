import React from 'react'

const Episode = (props) => {
  // console.log(props.title)
  return (
    <div className='card'>
      <h3>Episode: {props.title}</h3>
    </div>
  )
}

export default Episode

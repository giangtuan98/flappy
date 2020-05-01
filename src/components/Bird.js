import React from 'react';

import BirdImage from '../images/bird.png'

const Bird = () => {
  return (
    <div
    style={{
      position: 'absolute',
      top: 250,
      left: 120,
      width: 34,
      height: 26,
      background: `url(${BirdImage})`
    }}
    >

    </div>
  )
}

export default Bird
import React from 'react';
import GameOverImage from '../images/gameover.png'



const GameOver = () => {
  return (
    <div
    style={{
      position: 'absolute',
      top: 115,
      left: 50,
      width: 192,
      height: 41,
      background: `url(${GameOverImage})`,
    }}
    >

    </div>
  )
}

export default GameOver
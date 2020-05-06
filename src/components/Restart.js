import React from 'react';
import RestartImage from '../images/restart.png'




const Restart = ({pipe, handleRestart}) => {

  return (
    <div
    style={{
      position: 'absolute',
      top: 270,
      left: 77,
      background: `url(${RestartImage})`,
      backgroundRepeat: 'no-repeat',
      height: 50,
      width: 140,
      backgroundSize: 'contain',
    }}
    onClick={() => handleRestart()}
    >
    }
    </div>
  )
}

export default Restart
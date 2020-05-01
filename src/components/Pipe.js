import React from 'react';

import TopPipeImage from '../images/pipe-top.png';
import BottomPipeImage from '../images/pipe-bottom.png';

const Pipe = () => {
  return (
    <div
    style={{
      position: 'relative',
    }}
    >
      <div
      style={{
        position: 'absolute',
        top: 0,
        left: 150,
        width: 52,
        height: 200,
        background: `url(${TopPipeImage})`,
        backgroundPosition: 'bottom',
      }}></div>
      <div
      style={{
        position: 'absolute',
        top: 300,
        left: 150,
        width: 52,
        height: 200,
        background: `url(${BottomPipeImage})`
      }}
      ></div>
    </div>
  )
}

export default Pipe
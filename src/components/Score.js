import React from 'react';
import ZeroImage from '../images/0.png'
import OneImage from '../images/1.png'
import TwoImage from '../images/2.png'
import ThreeImage from '../images/3.png'
import FourImage from '../images/4.png'
import FiveImage from '../images/5.png'
import SixImage from '../images/6.png'
import SevenImage from '../images/7.png'
import EightImage from '../images/8.png'
import NineImage from '../images/9.png'



const Score = ({pipe}) => {
  const score = pipe.filter(p => 144 > p.x).length;
  
  const scoreStr = "" + score;
  const arrayScore = scoreStr.split('');
  const length = scoreStr.length;
  return (
    <div
    style={{
      position: 'absolute',
      top: 200,
      left: (288 - ( length * 24 ) - (length - 1) * 3)/2
    }}>
    {
      arrayScore.map((s, i) => {
        return <div
        key={`${i}s`}
        style={{
          position: 'relative',
          paddingLeft: 3,
          float: 'left',
          width: 24,
          height: 36,
          background: `url(${getImageByScore(s)})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        >
        </div>
      })
    }
    </div>
  )
}

const getImageByScore = (score) => {
  switch (score) {
    case '0':
      return ZeroImage
    case '1':
      return OneImage
    case '2':
      return TwoImage
    case '3':
      return ThreeImage
    case '4':
      return FourImage
    case '5':
      return FiveImage
    case '6':
      return SixImage
    case '7':
      return SevenImage
    case '8':
      return EightImage
    case '9':
      return NineImage
    default:
      break;
  }
}

export default Score
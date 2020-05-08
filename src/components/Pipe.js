import React from 'react';
import {connect} from 'react-redux'
import TopPipeImage from '../images/pipe-top.png';
import BottomPipeImage from '../images/pipe-bottom.png';

const Pipe = ({pipe}) => {
  let x = 0;
  return (
    <div
    style={{
      position: 'relative',
    }}
    >
    {
      pipe.map((p, i) => (
        <div key={`${i}wp`}>
        <div
          key={`${i}t`}
          style={{
            position: 'absolute',
            top: 0,
            left: p.x,
            width: 52,
            height: p.topHeight,
            background: `url(${TopPipeImage})`,
            backgroundPosition: 'bottom',
            transition: 'left 200ms'
          }}></div>
          <div
          key={`${i}b`}
          style={{
            position: 'absolute',
            top: p.topHeight + 120,
            left: p.x,
            width: 52,
            height: 512 - (p.topHeight+120),
            background: `url(${BottomPipeImage})`,
            transition: 'left 200ms'
          }}
          ></div>
        </div>
          
        )
      )
    }
      
    </div>
  )
}

const mapStateToProps = ({pipe}) => ({pipe: pipe});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Pipe)
import React from 'react';
import { connect } from "react-redux";
import BirdImage from '../images/bird.png'
import * as GameActions from '../actions/game';
import { bindActionCreators } from 'redux';


const Bird = ({y, r, gameActions}) => {
  const { end } = gameActions;
  return (
    <div
    style={{
      position: 'absolute',
      top: y,
      left: 120,
      width: 34,
      height: 26,
      background: `url(${BirdImage})`,
      transform: `rotate(${r}deg)`,
      transition: `transform 200ms, top 200ms`,
    }}
    >

    </div>
  )
}
const mapStateToProps = ({bird}) => ({y: bird.y, r:bird.r});
const mapDispatchToProps = dispatch => {
  return {
    gameActions: bindActionCreators(GameActions, dispatch)
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Bird)
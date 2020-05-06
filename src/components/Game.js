import React, { useEffect, useRef } from 'react';
import Bird from './Bird';
import Pipe from './Pipe';
import Score from './Score';
import Restart from './Restart';
import Foreground from './Foreground';
import BgImage from '../images/bg.png';
import { connect } from "react-redux";
import * as gameActions from '../actions/game';
import * as birdActions from '../actions/bird';
import * as pipeActions from '../actions/pipe';
import * as BackgroundActions from '../actions/background';
import { bindActionCreators } from 'redux';
import GameOver from './GameOver';
import BgNightImage from '../images/background-night.png'
import MessageImage from '../images/message.png'
import * as backgroundConstants from '../constants/background';

const Game = ({game, background, bird, gameAction, birdAction, pipeAction, pipe, backgroundAction }) => {
  
  const { fly, fall, resetBird } = birdAction;
  const { running, createPipe, resetPipe } = pipeAction;
  const { status } = game;
  const { y } = bird;
  const { start, end, resetGame } = gameAction;
  const { toggleStatus, resetBackground } = backgroundAction;
  const { timeStatus } = background;
  
  const stt = useRef('start');
  let score = 0;
  
  useEffect(() => {
    // khai bao su kien cho nut space
    console.log(status);
    
    const handleKeyPress = (e) => {      
      if (e.keyCode === 32 && stt.current === 'playing') {
        console.log('fly');
        
        fly();
      }
      if (e.keyCode === 32 && stt.current === 'start') {
        stt.current = 'playing';
        fly();
        start();
      } 
    }
    document.addEventListener('keypress', handleKeyPress)
    
    
    const interval = setInterval(() => {
      if (status === 'playing') {
        fall();
        running(); 
      }
      
    }, 100);
    
    const toggleTime = setInterval(() => {
      if (status === 'playing') {
        toggleStatus();
      }
    }, 30000);
    
    if (status === 'end') {
      clearInterval(interval);
      clearInterval(toggleTime);
      document.removeEventListener("keypress", handleKeyPress);
    }
    
    return () => {
      clearInterval(interval);
      clearInterval(toggleTime);
      document.removeEventListener("keypress", handleKeyPress);
    }
  }, [status, stt]);
  
  useEffect(() => {
    if (y === 380) {
      stt.current = 'end';
      end();
    }
    return () => {
      
    };
  }, [y]);
  
  // debugger
  const handleRestart = () => {
    stt.current = 'start';
    resetPipe();
    resetBird();
    resetBackground();
    resetGame();
    
  }
  return (
    <div>
    {
      stt.current === 'start' && <div
      style={{
        position: 'absolute',
        width: 288,
        height: 512,
        background: `url(${MessageImage})`,
        overflowX: 'hidden',
        transition: '1s ease-in-out',
        backgroundRepeat: 'no-repeat',
        zIndex: 10,
        backgroundPositionX: 45,
        backgroundPositionY: 80,
      }}
      >
      </div>
    }
    <div
    style={{
      position: 'relative',
      width: 288,
      height: 512,
      background: `url(${toggleBgImage(timeStatus)})`,
      overflowX: 'hidden',
      transition: '1s ease-in-out'
    }}
    >

    <Bird />
    <Pipe />
    {
      stt.current === 'end' && <div><GameOver /><Score pipe={pipe}/><Restart handleRestart={handleRestart}/></div> 
    }
    <Foreground />
    </div>
    
   
    </div>
    
    )
  }


  
  const toggleBgImage = (timeStatus) => {
    if (timeStatus === backgroundConstants.NIGHT) {
      return BgNightImage;
    }
    return BgImage;
  }
  
  const mapStateToProps = ({game, bird, pipe, background}) => {
    return {
      game: game,
      bird: bird,
      pipe: pipe,
      background: background
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      gameAction: bindActionCreators(gameActions, dispatch),
      birdAction: bindActionCreators(birdActions, dispatch),
      pipeAction: bindActionCreators(pipeActions, dispatch),
      backgroundAction: bindActionCreators(BackgroundActions, dispatch),
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Game)
import * as gameConstants from '../constants/game';

export const start = () => {
  return {
    type: gameConstants.START
  };
}

export const end = () => {
  return {
    type: gameConstants.END
  };
}

export const resetGame = () => {
  return {
    type: gameConstants.RESET
  }
};

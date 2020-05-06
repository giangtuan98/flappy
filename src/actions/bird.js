import * as birdConstants from '../constants/bird';

export const fly = () => {
  return {
    type: birdConstants.FLY
  }
}

export const fall = () => {
  return {
    type: birdConstants.FALL
  }
}

export const resetBird = () => {
  return {
    type: birdConstants.RESET
  }
};

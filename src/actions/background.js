import * as backgroundConstants from '../constants/background';

export const toggleStatus = () => {
  return {
    type: backgroundConstants.TOGGLE
  }
};

export const resetBackground = () => {
  return {
    type: backgroundConstants.RESET
  }
};
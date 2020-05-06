import * as pipeConstants from '../constants/pipe';

export const running = () => {
  return {
    type: 'RUN'
  };
}

export const createPipe = () => {
  return {
    type: pipeConstants.CREATE
  };
}

export const resetPipe = () => {
  return {
    type: pipeConstants.RESET
  }
};
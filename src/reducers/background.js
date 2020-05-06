import * as backgroundConstants from "../constants/background";

const initialState = {
  timeStatus: backgroundConstants.DAY,
};

export default (state = initialState, {type} = {}) => {
  // console.log(type);
     
  switch (type) {
    case backgroundConstants.TOGGLE:  
      if (state.timeStatus === backgroundConstants.DAY) {
        return {...state, timeStatus: backgroundConstants.NIGHT }
      }
      return {...state, timeStatus: backgroundConstants.DAY }
    case backgroundConstants.RESET:
      return {...state, timeStatus: backgroundConstants.DAY }
    default:
      return {...state }
  }
}
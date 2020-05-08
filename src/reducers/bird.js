import * as birdConstants from "../constants/bird";

const initialState = {
  y: 250,
  r: 0,
};

export default (state = initialState, {type} = {}) => {
  // console.log(type);
     
  switch (type) {
    case birdConstants.FLY:  
      let x = state.y - 65 < 0 ? 0 : state.y - 65; 
      return {...state, y: x, r: -20 }
    case birdConstants.FALL:
      let y = state.y + 20 > 380 ? 380 : state.y + 20;
      return {...state, y , r:20};
    case birdConstants.RESET:
      return {...state, y:250 , r:0};
    default:
      return {...state }
  }
}
import * as gameConstants from '../constants/game';

let initialState = {
  
};

const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case gameConstants.START:
      return {...state, status: 'playing' }
    case gameConstants.END:      
      return {...state, status: 'end' }
    case gameConstants.RESET:      
      return {...state, status: 'start' }
    default:
      return {...state};
  }
}

export default reducer;
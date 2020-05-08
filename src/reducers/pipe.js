import * as pipeConstants from '../constants/pipe'
const initialState = [
    {
      x: 288,
      topHeight: 100,
    },
    {
      x: 488,
      topHeight: 120,
    },
    {
      x: 688,
      topHeight: 150,
    },
  ];

export default (state = initialState, action) => {
  // debugger
  switch (action.type) {
    case pipeConstants.RUN:
      let newState = [];
      let last = state[state.length-1];
      if (last.x < 288) {
        let next = {
          topHeight : Math.floor(Math.random()*200) + 50,
          x : state[state.length-1].x + 200
        };
        newState = [...state, { ...next }];
        // newState.shift();
      } else {
        newState = [...state ];
      }
      newState = newState.map((pipe, i) => {
        return {...pipe, x: pipe.x-10};
      })
      return [...newState ];
    case pipeConstants.RESET:
      return [
        {
          x: 288,
          topHeight: 100,
        },
        {
          x: 488,
          topHeight: 120,
        },
        {
          x: 688,
          topHeight: 150,
        },
      ]
    default:
      return state;
  }
}
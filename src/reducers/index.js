import { combineReducers } from "redux";

import game from "./game";
import bird from "./bird";
import pipe from "./pipe";
import background from "./background";
const rootReducer = combineReducers({
  game,
  bird,
  pipe,
  background,
});

export default rootReducer;
import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import { uiReducer } from "./uiReducer";

const rootReducer = combineReducers({
  ui: uiReducer,
});

export const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

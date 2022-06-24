import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reducer } from "./reducers";

export const store = createStore(reducer);
const makeStore = () =>
  createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export const wrapper = createWrapper(makeStore);

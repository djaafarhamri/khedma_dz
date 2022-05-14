import { createStore, combineReducers, applyMiddleware } from "redux";
import { user } from "./userStore/userReducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = {
  user,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

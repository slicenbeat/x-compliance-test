import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { profileReducer } from "./profileReducer";
import { repositoryReducer } from "./repositoryReducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  repository: repositoryReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

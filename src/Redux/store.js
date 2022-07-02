import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
  } from "redux";
  
  import { HomeReducer } from "./Home/HomeReducer";
  import thunk from "redux-thunk"
  
  const rootReducer = combineReducers({
    movies: HomeReducer,
  });
  
  export const store = createStore(rootReducer, applyMiddleware(thunk))
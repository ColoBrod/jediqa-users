import { combineReducers } from "redux";
import { api } from "./api";

// @ts-ignore
const reducer = combineReducers({
  [api.reducerPath]: api.reducer,
  // filters: filtersReducer,
});

export default reducer;  

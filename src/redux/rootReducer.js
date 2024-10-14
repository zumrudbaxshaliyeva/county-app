import { combineReducers } from "redux";
import  { countryReducers } from "./slices/CountrySlices";

const rootReducer = combineReducers({
    country: countryReducers,
  });

  export default rootReducer;


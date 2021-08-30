import { combineReducers } from "redux";
import bugerReducer from "./Buger";

const rootReducer = combineReducers({
  // Khai báo tất cả reducer con vào đây
  buger: bugerReducer,
});

export default rootReducer;

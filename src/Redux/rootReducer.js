import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import loginReducer from "./reducers/loginReducer";

const rootReducer = combineReducers({
  user: userReducer,
  loginInfo: loginReducer,
});
export default rootReducer;

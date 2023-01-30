import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import signUpReducer from "./signUpReducer";

const rootReducers = combineReducers({
  auth: authReducer,
  userRegistration: signUpReducer,
  cart: cartReducer,
});

export default rootReducers;

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/icecream/iceCreamSlice";
import userReducer from "../features/user/userSlice";

//3rd party middleware
// import reduxLogger from "redux-logger";
// const logger = reduxLogger.createLogger();

//custome middleware
const customMiddleware = (store) => (next) => (action) => {
  console.log("ACTION : ", action.type);
  console.log("     current state ", store.getState());
  const nextState = next(action);
};

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
  },
  //   middleware: (getDefaultMiddleware) => {
  //     return getDefaultMiddleware().concat([customMiddleware,logger]);
  //   },
});

export default store;

// import { applyMiddleware, createStore } from "redux";
// import thunk from "redux-thunk";
// import rootReducers from "./Reducers";

// const store = createStore(rootReducers, applyMiddleware(thunk));

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import cartReducer from "./Slice/cartSlice";
import userReducer from "./Slice/userSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  version: 1,
  storage: storage,
  blacklist: [],
};

const reducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

export const persistor = persistStore(store);

export default store;

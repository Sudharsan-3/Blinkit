import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from '../features/CartSlice';

// redux-persist imports
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// combine your reducers (add more if needed later)
const rootReducer = combineReducers({
  cart: cartReducer,
});

// persist config for entire store (or just one slice)
const persistConfig = {
  key: 'root', // key in localStorage
  storage,
  whitelist: ['cart'], // only persist cart slice
};

// wrap rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // ignore redux-persist action warnings
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// create persistor
export const persistor = persistStore(store);


// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from '../features/CartSlice'

// export const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

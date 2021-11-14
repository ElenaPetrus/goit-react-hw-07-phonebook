import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: true,
  // devTools: process.env.NODE_ENV === 'development',
});
// const persistor = persistStore(store);
// const obj = { store, persistor };
// export default obj;

export default store;

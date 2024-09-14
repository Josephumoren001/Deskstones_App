// redux/store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import themeReducer from './theme/themeSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Combine your reducers
const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
  // Add other reducers here as needed
});

// Configurations for redux-persist
const persistConfig = {
  key: 'root',   // The key for the persist storage
  storage,       // Use local storage to persist the state
  version: 1,    // Version of the persisted data format
};

// Wrap the rootReducer with persistReducer to enable persistence
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store with the persisted reducer and middleware settings
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,  // Disable serializable state invariant middleware checks
    }),
});

// Set up the persistor to manage the persisted state
export const persistor = persistStore(store);

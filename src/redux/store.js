import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // This uses localStorage; if you want to use other storage, they are available too.
import UserRegister from '../features/DataFile'

// Persist config
const persistConfig = {
    key: 'root',
    storage,
};

// Combine your reducers first
const rootReducer = combineReducers({
    UserRegister: UserRegister

});

// Apply persistReducer to the combined reducers
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Set up your store with the persisted reducer
const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;

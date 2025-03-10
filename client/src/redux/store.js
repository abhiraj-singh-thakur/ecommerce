import {combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import cartSlice, {resetCart} from "./cartSlice";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore,} from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
    key: 'root',
    storage
}
const rootReducer = combineReducers({
        categoryReducer: categorySlice,
        cartReducer: cartSlice,
    }
);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware:  [thunk],
});

export const persistor = persistStore(store);
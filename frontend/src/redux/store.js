// import { combineReducers, configureStore } from "@reduxjs/toolkit"
// import userReducer  from "./userSlice";
// import messageReducer from "./messageSlice"
// import socketReducer from "./socketSlice"
// import {
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   } from 'redux-persist';

// import storage from 'redux-persist/lib/storage'

//   const persistConfig = {
//     key: 'root',
//     version: 1,
//     storage,
//   }

//   const rootReducer = combineReducers({
//     user:userReducer,
//     message:messageReducer,
//     socket:socketReducer
//  })

// const persistedReducer = persistReducer(persistConfig, rootReducer)




// const store = configureStore({
//     reducer:persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// })


// export default store;





import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import messageReducer from "./messageSlice";
import socketReducer from "./socketSlice";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storageModule from 'redux-persist/lib/storage'
const storage = storageModule.default
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers({
  user: userReducer,
  message: messageReducer,
  socket: socketReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
//console.log("storage object:", storage);
//console.log("storage.getItem:", storage?.getItem);
export const persistor = persistStore(store); 
export default store;
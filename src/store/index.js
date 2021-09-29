import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import moviesReducer from './movies/slice'
import authReducer from './auth/slice'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer:{
        movies:moviesReducer,
        auth:authReducer,
    },
     middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({serializableCheck: false}).concat(sagaMiddleware),

})

for(const saga in sagas){
    sagaMiddleware.run(sagas[saga])

}

export default store;


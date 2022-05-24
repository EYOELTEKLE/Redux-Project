
import {createSlice,configureStore} from '@reduxjs/toolkit'
import AuthSliceReducer from './auth';
import counterReducer from './counter';

const store  = configureStore({
    reducer:{counter:counterReducer,Auth:AuthSliceReducer}
});



export default store;
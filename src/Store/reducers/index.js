import {configureStore} from '@reduxjs/toolkit';
import { errorReducer } from './ErrorReducer';
import { usersReducers } from './UserReducer';
import { AuthReducer } from './AuthReducer';
import { postReducer } from './postReducer';
import { AllPostReducer } from './AllPostReducer';




export const store = configureStore({
    reducer:{
        users:usersReducers,
        error:errorReducer,
        auth:AuthReducer,
        posts:postReducer,
        allposts:AllPostReducer,
      
    }
})
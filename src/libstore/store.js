import { configureStore } from "@reduxjs/toolkit";
import fictionReducer from '../features/fiction/fictionSlice';
import booksReducer from './booksSlice'
const store=configureStore({
    reducer:{
       // fictionBooks:fictionReducer,
        books: booksReducer,
    }
})
export default store;
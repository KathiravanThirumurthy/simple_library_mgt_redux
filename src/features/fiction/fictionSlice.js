/*import { createSlice } from "@reduxjs/toolkit";

const initialState=[
   
        { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
        { id: 2, title: '1984', author: 'George Orwell' },
        { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  
];
const fictionSlice=createSlice({
    name:'Fiction',
    initialState,
    reducers:{
        addFictionBook:(state,action)=>{
            state.push(action.payload);
        },
        removeFictionBook:(state,action)=>{
            return state.filter((book) => book.id !== action.payload);
        },
        updateFictionBook: (state, action) => {
            const index = state.findIndex((book) => book.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
    }
})
export const { addFictionBook, removeFictionBook,updateFictionBook } = fictionSlice.actions;
export default fictionSlice.reducer; */
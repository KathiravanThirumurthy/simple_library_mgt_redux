import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: 1, title: 'The Theory of Everything', author: 'Stephen Hawking', category: 'Science' },
    { id: 2, title: 'A Brief History of Time', author: 'Stephen Hawking', category: 'Science' },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Fiction' },
    { id: 4, title: '1984', author: 'George Orwell', category: 'Fiction' },
    { id: 5, title: 'Sapiens', author: 'Yuval Noah Harari', category: 'History' },
];

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.push(action.payload);
        },
        removeBook: (state, action) => {
            const index = state.findIndex((book) => book.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        updateBook: (state, action) => {
            const index = state.findIndex((book) => book.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        editBook: (state, action) => {
            const index = state.findIndex((book) => book.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteBook: (state, action) => {
            return state.filter((book) => book.id !== action.payload);
        },
    },
});

export const { addBook, removeBook, updateBook,editBook,deleteBook } = booksSlice.actions;

export default booksSlice.reducer;

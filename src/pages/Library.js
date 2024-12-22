import React from 'react';
import FictionBooks from '../features/fiction/FictionBooks';
import ScienceBooks from '../features/science/ScienceBooks';
import HistoryBooks from '../features/history/HistoryBooks';
import BookList from '../components/BooList';

const Library = () => (
    <div>
        <h1>Library</h1>
       {/* <FictionBooks />
        <ScienceBooks />
        <HistoryBooks />*/}
        <BookList />
    </div>
);

export default Library;
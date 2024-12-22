/*import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFictionBook, removeFictionBook, updateFictionBook } from './fictionSlice';

const FictionBooks = () => {
    const books = useSelector((state) => state.fictionBooks);
    const dispatch = useDispatch();

    const [newBook, setNewBook] = useState({ title: '', author: '' });
    const [editBook, setEditBook] = useState(null);

    const handleAddBook = () => {
        if (newBook.title && newBook.author) {
            dispatch(addFictionBook({ id: Date.now(), ...newBook }));
            setNewBook({ title: '', author: '' });
        }
    };

    const handleRemoveBook = (id) => {
        dispatch(removeFictionBook(id));
    };

    const handleEditBook = (book) => {
        setEditBook(book);
    };

    const handleUpdateBook = () => {
        if (editBook.title && editBook.author) {
            dispatch(updateFictionBook(editBook));
            setEditBook(null);
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Fiction Books</h2>
            <ul style={styles.list}>
                {books.map((book) => (
                    <li key={book.id} style={styles.listItem}>
                        <h3 style={styles.title}>{book.title}</h3>
                        <p style={styles.author}>by {book.author}</p>
                        <button onClick={() => handleEditBook(book)} style={styles.button}>Edit</button>
                        <button onClick={() => handleRemoveBook(book.id)} style={styles.button}>Remove</button>
                    </li>
                ))}
            </ul>

            <div style={styles.form}>
                <h3>Add New Book</h3>
                <input
                    type="text"
                    placeholder="Title"
                    value={newBook.title}
                    onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Author"
                    value={newBook.author}
                    onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                    style={styles.input}
                />
                <button onClick={handleAddBook} style={styles.button}>
                    Add Book
                </button>
            </div>

            {editBook && (
                <div style={styles.form}>
                
                    <h3>Edit Book</h3>
                    <input
                        type="text"
                        value={editBook.title}
                        onChange={(e) => setEditBook({ ...editBook, title: e.target.value })}
                        style={styles.input}
                    />
                    <input
                        type="text"
                        value={editBook.author}
                        onChange={(e) => setEditBook({ ...editBook, author: e.target.value })}
                        style={styles.input}
                    />
                    <button onClick={handleUpdateBook} style={styles.button}>
                        Update Book
                    </button>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        textAlign: 'center',
        color: '#333',
        marginBottom: '20px',
    },
    list: {
        listStyleType: 'none',
        padding: 0,
    },
    listItem: {
        padding: '10px',
        borderBottom: '1px solid #ddd',
    },
    title: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#555',
    },
    author: {
        fontSize: '14px',
        color: '#777',
    },
    form: {
        marginTop: '20px',
        textAlign: 'center',
    },
    input: {
        margin: '5px',
        padding: '8px',
        width: '80%',
        borderRadius: '4px',
        border: '1px solid #ddd',
    },
    button: {
        margin: '5px',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default FictionBooks;
*/
import React from 'react'
import CategoryBookManager from '../../components/CategoryBookManager'

const FictionBooks = () => {
  return (
    <div>
        <CategoryBookManager category="Fiction" />
    </div>
  )
}

export default FictionBooks


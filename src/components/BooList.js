import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editBook, deleteBook } from '../libstore/booksSlice';

const BookList = () => {
    const books = useSelector((state) => state.books);
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [editingBookId, setEditingBookId] = useState(null);
    const [editedBook, setEditedBook] = useState({});

    // Get unique categories for the dropdown
    const categories = ['All', ...new Set(books.map((book) => book.category))];

    // Filter books based on selected category
    const filteredBooks = selectedCategory === 'All'
        ? books
        : books.filter((book) => book.category === selectedCategory);

    const handleEditClick = (book) => {
        setEditingBookId(book.id);
        setEditedBook({ ...book });
    };

    const handleSaveClick = () => {
        dispatch(editBook(editedBook));
        setEditingBookId(null);
    };

    const handleDeleteClick = (bookId) => {
        dispatch(deleteBook(bookId));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedBook((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Library</h1>
            
            <div style={styles.filterContainer}>
                <label htmlFor="categoryFilter" style={styles.label}>Filter by Category:</label>
                <select
                    id="categoryFilter"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    style={styles.select}
                >
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.headerCell}>ID</th>
                        <th style={styles.headerCell}>Title</th>
                        <th style={styles.headerCell}>Author</th>
                        <th style={styles.headerCell}>Category</th>
                        <th style={styles.headerCell}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredBooks.map((book) => (
                        <tr key={book.id}>
                            {editingBookId === book.id ? (
                                <>
                                    <td style={styles.cell}>{book.id}</td>
                                    <td style={styles.cell}>
                                        <input
                                            type="text"
                                            name="title"
                                            value={editedBook.title}
                                            onChange={handleInputChange}
                                            style={styles.input}
                                        />
                                    </td>
                                    <td style={styles.cell}>
                                        <input
                                            type="text"
                                            name="author"
                                            value={editedBook.author}
                                            onChange={handleInputChange}
                                            style={styles.input}
                                        />
                                    </td>
                                    <td style={styles.cell}>
                                        <input
                                            type="text"
                                            name="category"
                                            value={editedBook.category}
                                            onChange={handleInputChange}
                                            style={styles.input}
                                        />
                                    </td>
                                    <td style={styles.cell}>
                                        <button onClick={handleSaveClick} style={styles.button}>
                                            Save
                                        </button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td style={styles.cell}>{book.id}</td>
                                    <td style={styles.cell}>{book.title}</td>
                                    <td style={styles.cell}>{book.author}</td>
                                    <td style={styles.cell}>{book.category}</td>
                                    <td style={styles.cell}>
                                        <button
                                            onClick={() => handleEditClick(book)}
                                            style={styles.button}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDeleteClick(book.id)}
                                            style={{ ...styles.button, backgroundColor: '#ff4d4d' }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        maxWidth: '900px',
        margin: '0 auto',
    },
    heading: {
        textAlign: 'center',
        color: '#333',
        marginBottom: '30px',
    },
    filterContainer: {
        marginBottom: '20px',
        textAlign: 'center',
    },
    label: {
        marginRight: '10px',
        fontWeight: 'bold',
    },
    select: {
        padding: '5px 10px',
        borderRadius: '4px',
        border: '1px solid #ddd',
        fontSize: '16px',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    headerCell: {
        border: '1px solid #ddd',
        padding: '10px',
        fontWeight: 'bold',
        textAlign: 'left',
        backgroundColor: '#f4f4f4',
    },
    cell: {
        border: '1px solid #ddd',
        padding: '10px',
        textAlign: 'left',
    },
    button: {
        padding: '5px 10px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        backgroundColor: '#007bff',
        color: 'white',
    },
    input: {
        padding: '5px',
        borderRadius: '4px',
        border: '1px solid #ddd',
        width: '100%',
    },
};

export default BookList;

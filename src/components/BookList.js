// import React from 'react';
// import { Link } from 'react-router-dom';

// const BookList = ({ books }) => {
//   return (
//     <div>
//       <h2>Books</h2>
//       <ul>
//         {books.map((book) => (
//           <li key={book.id}>
//             <Link to={`/books/${book.id}`}>{book.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BookList;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Library = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:4000/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/books/${id}`);
      fetchBooks(); // Refresh the book list
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const updateBook = async (id) => {
    const title = prompt('Enter new title:');
    const author = prompt('Enter new author:');
    const description = prompt('Enter new description:');

    if (title && author && description) {
      try {
        await axios.put(`http://localhost:4000/books/${id}`, { title, author, description });
        fetchBooks(); // Refresh the book list
      } catch (error) {
        console.error('Error updating book:', error);
      }
    }
  };

  return (
    <div>
      {books.map(book => (
        <div key={book.id}>
          <h2><Link to={`/books/${book.id}`}>{book.title}</Link></h2>
          <p>Author: {book.author}</p>
          <button onClick={() => deleteBook(book.id)}>Delete</button>
          <button onClick={() => updateBook(book.id)}>Update</button>
        </div>
      ))}
    </div>
  );
};

export default Library;

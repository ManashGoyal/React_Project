import React, { useState, useEffect } from 'react';
import BookList from '../components/BookList';
import axios from 'axios';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div>
      <BookList books={books} />
    </div>
  );
};

export default Books;

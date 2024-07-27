// import React from 'react';
// import AddBook from '../components/AddBook';
// import axios from 'axios';

// const AddBookPage = () => {
//   const addBook = (book) => {
//     // Post book to an API or save to local storage
//     axios.post('/api/books', book).then((response) => console.log(response.data));
//   };

//   return (
//     <div>
//       <AddBook addBook={addBook} />
//     </div>
//   );
// };

// export default AddBookPage;

import React from 'react';
import AddBook from '../components/AddBook';
import axios from 'axios';

const AddBookPage = () => {
  const addBook = (book) => {
    // Post book to JSON server (assuming json-server is running locally on port 5000)
    axios.post('http://localhost:4000/books', book)
      .then((response) => console.log(response.data))
      .catch((error) => console.error('Error adding book:', error));
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <AddBook addBook={addBook} />
    </div>
  );
};

export default AddBookPage;


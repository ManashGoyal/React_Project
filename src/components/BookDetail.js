// // import React from 'react';

// // const BookDetail = ({ book }) => {
// //   if (!book) return <div>Loading...</div>;

// //   return (
// //     <div>
// //       <h2>{book.title}</h2>
// //       <p>Author: {book.author}</p>
// //       <p>Description: {book.description}</p>
// //     </div>
// //   );
// // };

// // export default BookDetail;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const BookList = ({ books }) => {
//   if (!books || books.length === 0) return <div>No books available</div>;

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
//After this
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const BookDetail = () => {
//   const { id } = useParams();
//   const [book, setBook] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost:4000/books/${id}`)
//       .then(response => setBook(response.data))
//       .catch(error => console.error('Error fetching book:', error));
//   }, [id]);

//   if (!book) return <div>Loading...</div>;
  
//   return (
//     <div>
//       <h2>{book.title}</h2>
//       <p>Author: {book.author}</p>
//       <p>Description: {book.description}</p>
//     </div>
//   );
// };



// export default BookDetail;

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBook = async () => {
      try {
        console.log(`Fetching book details for ID: ${id}`);
        const response = await axios.get(`http://localhost:4000/books/${id}`);
        console.log('Book data fetched:', response.data);
        setBook(response.data);
      } catch (err) {
        console.error('Error fetching book:', err);
        setError('Error fetching book details');
      }
    };

    fetchBook();
  }, [id]);

  if (error) return <div>{error}</div>;
  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
      <Link to="/">Back to Library</Link>
    </div>
  );
};

export default BookDetail;






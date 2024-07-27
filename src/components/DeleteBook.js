const deleteBook = async (id, fetchBooks) => {
    await fetch(`http://localhost:4000/books/${id}`, {
      method: 'DELETE',
    });
    fetchBooks(); // Refresh the book list
  };
  
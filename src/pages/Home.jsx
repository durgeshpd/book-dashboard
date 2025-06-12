import React, { useEffect, useState } from 'react';
import { getBooks } from '../api';
import BookTable from '../components/BookTable';
import BookForm from '../components/BookForm';
import ShimmerTable from '../components/Shimmer';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const data = await getBooks();
      setBooks(data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleAddEdit = (data) => {
    if (selectedBook) {
      setBooks(prevBooks =>
        prevBooks.map(book =>
          book.id === selectedBook.id ? { ...book, ...data } : book
        )
      );
    } else {
      const newBook = { id: Date.now(), ...data };
      setBooks(prevBooks => [...prevBooks, newBook]);
    }
    setShowForm(false);
    setSelectedBook(null);
  };

  const handleDelete = () => {
    setBooks(prevBooks =>
      prevBooks.filter(book => book.id !== selectedBook.id)
    );
    setShowDeleteModal(false);
    setSelectedBook(null);
  };

  if (loading) return <ShimmerTable />;

  return (
    <div className="min-h-screen bg-base-200 p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">📚 Book Dashboard</h1>
        <button
          className="btn btn-primary"
          onClick={() => {
            setShowForm(true);
            setSelectedBook(null);
          }}
        >
          + Add Book
        </button>
      </div>

      <div className="bg-base-100 shadow rounded-lg p-6">
        <BookTable
          books={books}
          onEdit={b => {
            setSelectedBook(b);
            setShowForm(true);
          }}
          onDelete={b => {
            setSelectedBook(b);
            setShowDeleteModal(true);
          }}
        />
      </div>

      {showForm && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h2 className="text-2xl font-semibold mb-4">
              {selectedBook ? 'Edit Book' : 'Add Book'}
            </h2>
            <BookForm
              defaultValues={selectedBook || {}}
              onSubmit={handleAddEdit}
            />
            <div className="modal-action">
              <button className="btn btn-error" onClick={() => setShowForm(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="text-lg">
              Are you sure you want to delete “{selectedBook?.title}”?
            </h3>
            <div className="modal-action">
              <button className="btn btn-error" onClick={handleDelete}>
                Yes, Delete
              </button>
              <button className="btn" onClick={() => setShowDeleteModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

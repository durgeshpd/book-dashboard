import React from 'react';

const BookTable = ({ books, onEdit, onDelete }) => {
  return (
    <table className="table w-full">
      <thead>
        <tr>
          <th>Cover</th>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>Year</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {(books || []).map(book => (
          <tr key={book.id}>
            <td>{book.coverImage ? (
              <img
                src={book.coverImage}
                alt={`${book.title} cover`}
                style={{ width: '60px', height: '90px', objectFit: 'cover', borderRadius: '4px' }}
              />
            ) : (
              <span>No Image</span>
            )}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.genre}</td>
            <td>{book.publishedYear}</td>
            <td>
              <button className="btn btn-sm btn-accent mr-2" onClick={() => onEdit(book)}>Edit</button>
              <button className="btn btn-sm btn-error" onClick={() => onDelete(book)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;

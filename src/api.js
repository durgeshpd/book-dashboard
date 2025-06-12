export const getBooks = () =>
  fetch('/books.json')
    .then(res => {
      if (!res.ok) throw new Error('Failed to fetch books.json');
      return res.json();
    });

export const addBook = (data) => Promise.reject(new Error("Add not supported with local JSON"));
export const updateBook = (id, data) => Promise.reject(new Error("Update not supported with local JSON"));
export const deleteBook = (id) => Promise.reject(new Error("Delete not supported with local JSON"));

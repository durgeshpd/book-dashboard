import axios from 'axios';

const BASE_URL = "https://684a46db165d05c5d35829ec.mockapi.io/books";

export const getBooks = () => axios.get(BASE_URL);

export const addBook = (data) => axios.post(BASE_URL, data);

export const updateBook = (id, data) => axios.put(`${BASE_URL}/${id}`, data);

export const deleteBook = (id) => axios.delete(`${BASE_URL}/${id}`);

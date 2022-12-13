import { createSlice } from '@reduxjs/toolkit';

export const ADD_BOOK = 'bookstore/redux/books/ADD_BOOK';
export const REMOVE_BOOK = 'bookstore/redux/books/REMOVE_BOOK';
export const EDIT_NEWBOOK = 'bookstore/redux/books/EDIT_NEWBOOK';
export const EDIT_NEWBOOK_AURTHOR = 'bookstore/redux/books/EDIT_NEWBOOK_AURTHOR';
export const UPDATE_BOOK_STATUS = 'bookstore/redux/books/UPDATE_BOOK_STATUS';

const initialState = {
  books: [],
  newBook: {
    bookName: '',
    author: '',
  },
};

const replaceAt = (array, index, value) => {
  const ret = array.slice(0);
  ret[index] = value;
  return ret;
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookAction: (state, action) => {
      switch (action.payload.type) {
        case ADD_BOOK:
          state.books = [...state.books, action.payload.book];
          state.newBook = {
            ...state.newBook,
            author: '',
            bookName: '',
          };
          break;
        case REMOVE_BOOK:
          state.books = state.books.filter((book) => JSON.parse(book).id !== action.payload.id);
          break;
        case EDIT_NEWBOOK:
          state.newBook = { ...state.newBook, bookName: action.payload.bookName };
          break;
        case EDIT_NEWBOOK_AURTHOR:
          state.newBook = { ...state.newBook, author: action.payload.author };
          break;
        case UPDATE_BOOK_STATUS:
          state.books = replaceAt(
            state.books,
            state.books.findIndex((book) => JSON.parse(book).id === action.payload.id),
            action.payload.book,
          );
          break;
        default:
          state = { ...state };
          break;
      }
    },
  },
});
export const { bookAction } = bookSlice.actions;

export default bookSlice.reducer;
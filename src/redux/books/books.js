import { createSlice } from '@reduxjs/toolkit';

const ADD_BOOK = 'bookstore/redux/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/redux/books/REMOVE_BOOK';

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookReducer(state = initialState, action) {
      switch (action.type) {
        case ADD_BOOK:
          state = {
            ...state,
            books: [...state.books, action.payload.book],
          };
          return state;
        case REMOVE_BOOK:
          state = {
            ...state,
            books: state.books.filter((book) => book.id !== action.payload.bookId),
          };
          return state;
        default:
          return state;
      }
    },
  },
});
export { ADD_BOOK, REMOVE_BOOK };
export default bookSlice.reducer;
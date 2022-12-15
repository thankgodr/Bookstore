import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import BookModel from '../../models/bookmodel';
import Network from '../../network/network';

export const UPDATE_BOOK_STATUS = 'bookstore/redux/books/UPDATE_BOOK_STATUS';
export const GET_BOOKS_FROM_API = 'bookstore/redux/books/GET_BOOKS_FROM_API';
export const ADD_BOOK_TO_API = 'bookstore/redux/books/ADD_BOOK_TO_API';
export const DELETE_BOOK_TO_API = 'bookstore/redux/books/DELETE_BOOK_TO_API';

const bookstoreAPi = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const initialState = {
  books: [],
  isloading: false,
  refereshList: false,
};

export const getBooksFromApi = createAsyncThunk(GET_BOOKS_FROM_API,
  () => Network.getRequest(`${bookstoreAPi}/apps/${process.env.REACT_APP_STORE_ID}/books`, true));

export const addBooktoApi = createAsyncThunk(ADD_BOOK_TO_API,
  (book) => Network.postRequest(`${bookstoreAPi}/apps/${process.env.REACT_APP_STORE_ID}/books/`, book, false));

export const deleteBookFromAPI = createAsyncThunk(DELETE_BOOK_TO_API,
  (bookId) => Network.customRequestWithoutBody(
    `${bookstoreAPi}/apps/${process.env.REACT_APP_STORE_ID}/books/${bookId}`, 'DELETE', false,
  ));

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
        case UPDATE_BOOK_STATUS:
          return {
            ...state,
            books: replaceAt(
              state.books,
              state.books.findIndex((book) => JSON.parse(book).id === action.payload.id),
              action.payload.book,
            ),
          };
        default:
          return { ...state };
      }
    },
  },
  extraReducers: {
    [getBooksFromApi.pending]: (state) => ({ ...state, isloading: true }),
    [getBooksFromApi.fulfilled]: (state, action) => {
      const keys = Object.keys(action.payload);
      const bookArr = [];
      keys.forEach((key) => {
        action.payload[key].forEach((value) => {
          const tempBook = new BookModel(
            value.title,
            value.author,
            value.categori,
          );
          tempBook.id = key;
          bookArr.push(JSON.stringify(tempBook));
        });
      });
      return {
        ...state,
        books: bookArr,
        isloading: false,
      };
    },
    [getBooksFromApi.rejected]: (state) => ({ ...state, isloading: false }),
    [addBooktoApi.pending]: (state) => ({ ...state, isloading: true }),
    [addBooktoApi.fulfilled]: (state) => ({ ...state, refereshList: !state.refereshList }),
    [addBooktoApi.rejected]: (state) => ({ ...state, isloading: false }),
    [deleteBookFromAPI.pending]: (state) => ({ ...state, isloading: true }),
    [deleteBookFromAPI.fulfilled]: (state) => ({ ...state, refereshList: !state.refereshList }),
    [deleteBookFromAPI.rejected]: (state) => ({ ...state, isloading: false }),

  },
});
export const { bookAction } = bookSlice.actions;

export default bookSlice.reducer;
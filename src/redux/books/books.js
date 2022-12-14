import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import BookModel from '../../models/bookmodel';
import Network from '../../network/network';

export const ADD_BOOK = 'bookstore/redux/books/ADD_BOOK';
export const REMOVE_BOOK = 'bookstore/redux/books/REMOVE_BOOK';
export const UPDATE_BOOK_STATUS = 'bookstore/redux/books/UPDATE_BOOK_STATUS';
export const GET_BOOKS_FROM_API = 'bookstore/redux/books/GET_BOOKS_FROM_API';
export const Add_BOOK_TO_API = 'bookstore/redux/books/Add_BOOK_TO_API';
export const DELETE_BOOK_TO_API = 'bookstore/redux/books/DELETE_BOOK_TO_API';

const bookstoreAPi = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const initialState = {
  books: [],
  isloading: false,
  refereshList: false
};

export const getBooksFromApi = createAsyncThunk(GET_BOOKS_FROM_API,
  () => Network.getRequest(`${bookstoreAPi}/apps/${process.env.REACT_APP_STORE_ID}/books`, true));
export const addBooktoApi = createAsyncThunk(Add_BOOK_TO_API,
  (book) => Network.postRequest(`${bookstoreAPi}/apps/${process.env.REACT_APP_STORE_ID}/books/`, book, false));

export const deleteBookFromAPI = createAsyncThunk(DELETE_BOOK_TO_API,
  (bookId) => Network.customRequestWithoutBody(
    `${bookstoreAPi}/apps/${process.env.REACT_APP_STORE_ID}/books/${bookId}`, "DELETE", false));



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
  extraReducers: {
    [getBooksFromApi.pending]: (state) => {
      return { ...state, isloading: true }
    },
    [getBooksFromApi.fulfilled]: (state, action) => {
      const keys = Object.keys(action.payload)
      const bookArr = []
      keys.map(key => {
        action.payload[key].forEach(value => {
          const tempBook = new BookModel(
            value.title,
            value.author,
            value.categori
          )
          tempBook.id = key
          bookArr.push(JSON.stringify(tempBook))
        })
      })
      return {
        ...state,
        books: bookArr,
        isloading: false
      }
    },
    [getBooksFromApi.rejected]: (state) => {
      return { ...state, isloading: false }
    },
    [addBooktoApi.pending]: (state) => {
      return { ...state, isloading: true }
    },
    [addBooktoApi.fulfilled]: (state) => {
      return { ...state, refereshList: !state.refereshList }
    },
    [addBooktoApi.rejected]: (state) => {
      return { ...state, isloading: false }
    },
    [deleteBookFromAPI.pending]: (state) => {
      return { ...state, isloading: true }
    },
    [deleteBookFromAPI.fulfilled]: (state) => {
      return { ...state, refereshList: !state.refereshList }
    },
    [deleteBookFromAPI.rejected]: (state) => {
      return { ...state, isloading: false }
    },

  },
});
export const { bookAction } = bookSlice.actions;

export default bookSlice.reducer;
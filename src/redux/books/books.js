export const BOOK_ACTION = {
  ADD: 'add_book',
  REMOVE: 'remove_book',
};

const initialState = {
  books: [],
};

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case BOOK_ACTION.ADD:
      state = {
        ...state,
        books: [...state.books, action.payload.book],
      };
      return state;
    case BOOK_ACTION.REMOVE:
      state = {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload.bookId),
      };
      return state;
    default:
      return state;
  }
}

export const BOOK_ACTION = {
    ADD : "add_book",
    REMOVE: "remove_book"
}

const initial_state = {
    books: []
}

export default function bookReducer(state = initial_state, action){
    switch(action.type){
        case BOOK_ACTION.ADD:
            const newBookArray = [...state.books, action.payload.book]
            state = {
                ...state,
                books: newBookArray
            }
            return state
        case BOOK_ACTION.REMOVE:
            const filteredBook = state.books.filter(book => book.id != payload.bookID)
            state = {
                ...state,
                books: filteredBook
            }
            return state
        default:
            return state
    }
}


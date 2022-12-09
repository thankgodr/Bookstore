import PropTypes from 'prop-types';
import AddNewBook from '../components/AddNewBook';
import Book from '../components/Book';

const Books = (props) => {

    const addComment = (book) => {
        //Todo implement add comment
    }

    const removeBook = (book) => {
        //Todo implement remove book
    }

    const editBook = (book) => {
        //Todo implement remove book
    }

    const updateBook = (book) => {
        //Todo implement remove book
    }

    return (
        <div>
            {props.bookList.map((book) => {
                return <Book
                    title={book.title}
                    author={book.author}
                    book={book}
                    commentFunction={addComment}
                    removeFunction={removeBook}
                    editFunction={editBook}
                    updateFunction={updateBook}
                />
            })}
            <AddNewBook />
        </div>
    )
}

Books.propTypes = {
    bookList: PropTypes.array.isRequired
}

export default Books
import PropTypes from 'prop-types';
import AddNewBook from '../components/AddNewBook';
import Book from '../components/Book';

const Books = (props) => {
  const addComment = (book) => {
    // Todo implement add comment
    parseInt(book, 10);
  };

  const removeBook = (book) => {
    // Todo implement remove book
    parseInt(book, 10);
  };

  const editBook = (book) => {
    // Todo implement remove book
    parseInt(book, 10);
  };

  const updateBook = (book) => {
    // Todo implement remove book
    parseInt(book, 10);
  };

  return (
        <div>
            {props.bookList.map((book) => <Book
                title={book.title}
                author={book.author}
                book={book}
                commentFunction={addComment}
                removeFunction={removeBook}
                editFunction={editBook}
                updateFunction={updateBook}
                key={book.id}
            />)}
            <AddNewBook />
        </div>
  );
};

Books.propTypes = {
  bookList: PropTypes.array.isRequired,
};

export default Books;
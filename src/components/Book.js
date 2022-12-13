import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import BookModel from '../models/bookmodel';
import { bookAction, REMOVE_BOOK, UPDATE_BOOK_STATUS } from '../redux/books/books';

const Book = (props) => {
  const removeBookFromStore = (id) => ({
    type: REMOVE_BOOK,
    id,
  });

  const editBookStatusInStore = (book) => {
    book.updateCurrentChapter(props.book.currentChapter + 1);
    return {
      type: UPDATE_BOOK_STATUS,
      id: props.book.id,
      book: JSON.stringify(book),
    };
  };
  const dispatch = useDispatch();
  return (
        <div className='card'>
            <div className='row'>
                <div className='col-md-6'>
                    <p className='genre'>{props.book.genre}</p>
                    <h4 className='title'>{props.title}</h4>
                    <p className='author'>{props.author}</p>
                    <ul>
                        <li>
                            <button onClick={
                                () => { }}>Comment
                            </button>
                        </li>
                        <li>
                            <button onClick={
                                (event) => {
                                  event.preventDefault();
                                  dispatch(bookAction(
                                    removeBookFromStore(props.book.id),
                                  ));
                                }}>Remove
                            </button>
                        </li>
                        <li>
                            <button onClick={
                                () => {

                                }}>Edit
                            </button>
                        </li>
                    </ul>
                </div>
                <div className='col-md-3'>
                    <h1>64%</h1>
                </div>
                <div className='col-md-3'>
                    <p>Current Chapter</p>
                    <p>Chapter {props.book.currentChapter}</p>
                    <button onClick={
                        (event) => {
                          event.preventDefault();
                          dispatch(bookAction(
                            editBookStatusInStore(props.book),
                          ));
                        }}>Update Progress
                    </button>
                </div>
            </div>
        </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  book: PropTypes.instanceOf(BookModel).isRequired,
};

export default Book;

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import BookModel from '../models/bookmodel';
import { bookAction, REMOVE_BOOK, UPDATE_BOOK_STATUS } from '../redux/books/books';

const Book = (props) => {
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
                                    {
                                      type: REMOVE_BOOK,
                                      id: props.book.id,
                                    },
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
                          const bookUpdated = props.book;
                          bookUpdated.updateCurrentChapter(props.book.currentChapter + 1);
                          dispatch(bookAction(
                            {
                              type: UPDATE_BOOK_STATUS,
                              id: props.book.id,
                              book: JSON.stringify(bookUpdated),
                            },
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

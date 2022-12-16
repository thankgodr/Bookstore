import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import BookModel from '../models/bookmodel';
import { bookAction, deleteBookFromAPI, UPDATE_BOOK_STATUS } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';

const Book = (props) => {
  const editBookStatusInStore = (book) => {
    book.updateCurrentChapter(props.book.currentChapter + 1);
    return {
      type: UPDATE_BOOK_STATUS,
      id: props.book.id,
      book: JSON.stringify(book),
    };
  };
  const percent = Math.ceil((100 * props.book.currentChapter) / props.book.totalChapter);
  const dispatch = useDispatch();
  return (
        <div className='card book'>
            <div className='row'>
                <div className='col-md-6 col-sm-12'>
                    <h4 className='genre'>{props.book.genre}</h4>
                    <h4 className='title'>{props.title}</h4>
                    <h4 className='author'>{props.author}</h4>
                    <ul className='list-group list-group-horizontal'>
                        <li className='list-group-item border-0 p-0'>
                            <button className='p-0 button-outline' onClick={
                                () => { }}>Comment
                            </button>
                        </li>
                        <div className="vertical-divider"></div>
                        <li className='list-group-item border-0 p-0'>
                            <button className='p-0 button-outline' onClick={
                                (event) => {
                                  event.preventDefault();
                                  dispatch(deleteBookFromAPI(
                                    props.book.id,
                                  ));
                                }}>Remove
                            </button>
                        </li>
                        <div className="vertical-divider"></div>
                        <li className='list-group-item border-0 p-0'>
                            <button className='p-0 button-outline' onClick={
                                () => {

                                }}>Edit
                            </button>
                        </li>
                    </ul>
                </div>
                <div className='col-md-3 col-sm-12 d-flex flex-row progress-holder justify-content-center align-items-center'>
                    <div className='progress-div'>
                        <CircularProgressbar value={percent} />
                    </div>
                    <div className="progress-stat">
                        <p className="percent-complete">{percent}%</p>
                        <p className="completed">Completed</p>
                    </div>
                </div>
                <div className='col-md-3 col-sm-12 current-div'>
                    <h4 className='current-chapter-text'>Current Chapter</h4>
                    <h4 className='current-chapter'>Chapter {props.book.currentChapter}</h4>
                    <button className='update-btn' onClick={
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

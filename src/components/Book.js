import PropTypes from 'prop-types';
import BookModel from '../models/bookmodel';

const Book = (props) => {
    return (
        <div className='card'>
            <div className='row'>
                <div className='col-md-6'>
                    <p className='genre'>{props.book.genre}</p>
                    <h4 className='title'>{props.title}</h4>
                    <p className='author'>{props.author}</p>

                    <ul>
                        <li><button onClick={() => { props.commentFunction(props.Book) }}>Comment</button></li>
                        <li><button onClick={() => { props.removeFunction(props.Book) }}>Remove</button></li>
                        <li><button onClick={() => { props.editFunction(props.Book) }}>Edit</button></li>
                    </ul>
                </div>
                <div className='col-md-3'>
                    <h1>64%</h1>
                </div>
                <div className='col-md-3'>
                    <p>Current Chapter</p>
                    <p>Chapter 17</p>
                    <button onClick={() => { props.updateFunction(props.Book) }}>Update Progress</button>
                </div>
            </div>
        </div>
    )
}

Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    book: PropTypes.instanceOf(BookModel).isRequired,
    commentFunction: PropTypes.func.isRequired,
    removeFunction: PropTypes.func.isRequired,
    editFunction: PropTypes.func.isRequired,
    updateFunction: PropTypes.func.isRequired
}

export default Book


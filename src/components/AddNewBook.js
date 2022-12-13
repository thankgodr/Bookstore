import { useDispatch, useSelector } from 'react-redux';
import BookModel from '../models/bookmodel';
import {
  ADD_BOOK, bookAction, EDIT_NEWBOOK, EDIT_NEWBOOK_AURTHOR,
} from '../redux/books/books';

const AddNewBook = () => {
  const dispatch = useDispatch();
  const newBook = useSelector((state) => state.books.newBook);
  return (
        <form className="form-inline">
            <label
                className="sr-only"
                htmlFor="inlineFormInputName2"
            />
            <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                id="inlineFormInputName2"
                placeholder="Book Title"
                value={newBook.bookName}
                onChange={(e) => dispatch(bookAction({
                  type: EDIT_NEWBOOK,
                  bookName: e.target.value,
                }))}
            />

            <label
                className="sr-only"
                htmlFor="inlineFormInputGroupUsername2"
            />
            <div className="input-group mb-2 mr-sm-2">
                <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputGroupUsername2"
                    placeholder="Author"
                    value={newBook.author}
                    onChange={(e) => dispatch(bookAction({
                      type: EDIT_NEWBOOK_AURTHOR,
                      author: e.target.value,
                    }))}
                />
            </div>

            <button
                type="submit"
                className="btn btn-primary mb-2"
                onClick={(e) => {
                  e.preventDefault();
                  const tempBookModel = new BookModel(newBook.bookName, newBook.author, 'Testing');
                  dispatch(bookAction(
                    { type: ADD_BOOK, book: JSON.stringify(tempBookModel) },
                  ));
                }}>Add Book</button>
        </form>
  );
};
export default AddNewBook;
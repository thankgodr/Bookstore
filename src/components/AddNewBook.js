import { useDispatch } from 'react-redux';
import { useState } from 'react';
import BookModel from '../models/bookmodel';
import {
  addBooktoApi,
} from '../redux/books/books';
import '../css/newbook.css';

const AddNewBook = () => {
  const dispatch = useDispatch();
  const [newBookName, setNewBookName] = useState('');
  const [newBookAuthur, setNewBookAuthur] = useState('');

  const addBookToStore = () => {
    const tempBookModel = new BookModel(newBookName, newBookAuthur, 'Action');
    setNewBookAuthur('');
    setNewBookName('');
    return {
      item_id: tempBookModel.id,
      title: tempBookModel.title,
      author: tempBookModel.author,
      category: tempBookModel.genre,
    };
  };
  return (
        <form className="form-inline row align-items-center">
            <div className='col-md-5'>
                <input
                    type="text"
                    className="form-control mb-2 mr-sm-2"
                    id="inlineFormInputName2"
                    placeholder="Book Title"
                    value={newBookName}
                    onChange={(e) => setNewBookName(e.target.value)}
                />
            </div>
            <div className="col-md-5">
                <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputGroupUsername2"
                    placeholder="Author"
                    value={newBookAuthur}
                    onChange={(e) => setNewBookAuthur(e.target.value)}
                />
            </div>

            <div className='col-md-2'>
                <button
                    type="submit"
                    className="primary-button-big "
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(addBooktoApi(
                        addBookToStore(),
                      ));
                    }}>Add Book</button>
            </div>

        </form>
  );
};
export default AddNewBook;
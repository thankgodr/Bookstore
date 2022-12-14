import { useDispatch } from 'react-redux';
import { useState } from 'react';
import BookModel from '../models/bookmodel';
import {
    addBooktoApi,
    ADD_BOOK, bookAction,
} from '../redux/books/books';

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
            category: tempBookModel.genre
        };
    };
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
                value={newBookName}
                onChange={(e) => setNewBookName(e.target.value)}
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
                    value={newBookAuthur}
                    onChange={(e) => setNewBookAuthur(e.target.value)}
                />
            </div>

            <button
                type="submit"
                className="btn btn-primary mb-2"
                onClick={(e) => {
                    e.preventDefault();
                    dispatch(addBooktoApi(
                        addBookToStore()
                    ));
                }}>Add Book</button>
        </form>
    );
};
export default AddNewBook;
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import AddNewBook from '../components/AddNewBook';
import Book from '../components/Book';
import BookModel from '../models/bookmodel';
import { getBooksFromApi } from '../redux/books/books';
import { useDispatch } from 'react-redux';


const Books = () => {
  const books = useSelector((state) => state.books);

  const mappedBooks = books.books.map(
    (eachBook) => Object.assign(new BookModel(), JSON.parse(eachBook)),
  );
  const dispatch = useDispatch()
  useEffect(() => {
    console.log("I was called")
    dispatch(getBooksFromApi());
  }, [books.refereshList]);
  return (
    <div>
      {mappedBooks.map((book) => <Book
        title={book.title}
        author={book.author}
        book={book}
        key={book.id}
      />)}
      <AddNewBook />
    </div>
  );
};

export default Books;
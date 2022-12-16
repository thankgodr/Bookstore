import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import AddNewBook from '../components/AddNewBook';
import Book from '../components/Book';
import BookModel from '../models/bookmodel';
import { getBooksFromApi } from '../redux/books/books';
import '../css/books.css';

const Books = () => {
  const books = useSelector((state) => state.books);

  const mappedBooks = books.books.map(
    (eachBook) => Object.assign(new BookModel(), JSON.parse(eachBook)),
  ).sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooksFromApi());
  }, [books.refereshList]);
  if (books.isloading && books.books.length < 1) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <div className='book_container' >
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
import { useSelector } from 'react-redux';
import AddNewBook from '../components/AddNewBook';
import Book from '../components/Book';
import BookModel from '../models/bookmodel';

const Books = () => {
  const books = useSelector((state) => state.books);
  console.log(books.books);
  const mappedBooks = books.books.map(
    (eachBook) => Object.assign(new BookModel(), JSON.parse(eachBook)),
  );
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
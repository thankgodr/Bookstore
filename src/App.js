import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import BookModel from './models/bookmodel';
import NavRoutes from './navigation/navroutes';
import Books from './pages/Books';
import Category from './pages/Category';

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path={NavRoutes.HOME} element={<Books bookList={[new BookModel("Test title", "ThankGod Richard", "Javascript")]} />} />
        <Route path={NavRoutes.BOOKS} element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;

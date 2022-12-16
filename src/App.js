import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import './css/App.css';
import Header from './components/Header';
import NavRoutes from './navigation/navroutes';
import Books from './pages/Books';
import Category from './pages/Category';
import store from './redux/configureStore';

const App = () => (
  <div className="App">
    <Provider store={store}>
      <Header></Header>
      <Routes>
        <Route path={NavRoutes.HOME} element={<Books />} />
        <Route path={NavRoutes.BOOKS} element={<Category />} />
      </Routes>
    </Provider>
  </div>
);

export default App;

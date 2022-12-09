import { Link } from 'react-router-dom';
import NavRoutes from "../navigation/navroutes";

const Header = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light p-2'>
            <h1 className='navbar-brand'>Bookstore CMS</h1>
            <ul className='navbar-nav'>
                <li className='nav-item'><Link className='nav-link' to={NavRoutes.HOME}>Books</Link></li>
                <li className='nav-item'><Link className='nav-link' to={NavRoutes.BOOKS}>Categories</Link></li>
            </ul>
        </nav>
    )
}

export default Header
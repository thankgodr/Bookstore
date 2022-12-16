import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import NavRoutes from '../navigation/navroutes';
import '../css/header.css';

const Header = () => (
    <nav className='navbar nav-bar navbar-expand-lg navbar-light'>
        <div className='d-flex justify-content-between col-12 align-items-center'>
            <div className='navbar  navbar-expand-lg'>
                <h1 className='navbar-brand nav-brand'>Bookstore CMS</h1>
                <ul className='navbar-nav'>
                    <li className='nav-item'><NavLink className="nav-link" to={NavRoutes.HOME}>Books</NavLink></li>
                    <li className='nav-item'><NavLink className="nav-link" to={NavRoutes.BOOKS}>Categories</NavLink></li>
                </ul>
            </div>

            <div className='d-flex icon-div nav navbar-nav ml-auto align-items-center justify-content-center'>
                <FontAwesomeIcon className='user-icon' icon={faUser} color="#0290ff" />
            </div>
        </div>
    </nav>
);

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import AdminLinks from './AdminLinks';
import { auth } from '../../../firebase/firebase.utils'

import { ReactComponent as Logo} from '../../../assets/coffee-cup.svg';

import './header.styles.css';


const Header = ({ currentUser }) => (
    <nav className='header nav-wrapper'>

        <Link to='/'>
            <Logo className='logo' />
        </Link>
        <div className=''>
            <Link className='option' to='/products'>Shop</Link>

            {
                currentUser ? 
                    <a className='option' onClick={() => auth.signOut()}>SIGN OUT</a>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
            }
            
            <AdminLinks />
        </div>

    </nav>
)


export default Header;
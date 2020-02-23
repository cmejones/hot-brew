import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import AdminLinks from './AdminLinks';
import { auth } from '../../../firebase/firebase.utils'

import { ReactComponent as Logo} from '../../../assets/coffee-cup.svg';

import './header.styles.css';


const Header = ({ currentUser }) => (
    <nav>
    <div className='header nav-wrapper'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/products'>Shop
                
            </Link>
            <SignedInLinks />
            <SignedOutLinks />
            <AdminLinks />

            {
                currentUser ? 
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
            }
        </div>

    </div>
    </nav>
)


export default Header;
import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {firebase} from '../firebase/firebase';

function Header() {
    return (
        <header className="header">
            <div className="content-container">
                <div className="header-content">
                    <Link className="header-title" to="/"  exact='true'>
                        <h1>Calorie Counter</h1>
                    </Link>
                   <div className="header-nav">
                        <NavLink to='/MyFoods' className="header-nav__link" activeClassName='header-nav__link--active' exact={true}>My Foods</NavLink>
                        <button className='btn btn--link' onClick={logout}>Logout</button>
                   </div>
                </div>
            </div>
        </header>
    )
}

function logout() {
    firebase.auth().signOut();
}

export default Header;
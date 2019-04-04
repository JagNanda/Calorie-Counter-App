import React from 'react';
import {NavLink} from 'react-router-dom';
import {firebase} from '../firebase/firebase';

function Header() {
    return (
        <div>
            <NavLink to="/" activeClassName='is-active' exact={true}>Home</NavLink>
            <NavLink to='/MyFoods' activeClassName='is-active' exact={true}>My Foods</NavLink>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

function logout() {
    firebase.auth().signOut();
}

export default Header;
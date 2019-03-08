import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink to="/" activeClassName='is-active' exact={true}>Home</NavLink>
            <NavLink to='/MyFoods' activeClassName='is-active' exact={true}>My Foods</NavLink>
        </div>
    )
}

export default Header;
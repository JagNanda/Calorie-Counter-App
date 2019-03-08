import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            <p>Page doesn't exist. Click <Link to='/'>here</Link> to go home.</p>
        </div>
    );
}

export default NotFoundPage;
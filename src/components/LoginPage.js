import React from 'react';
import {firebase} from '../firebase/firebase';

function LoginPage() {
    return (
        <div>
            <button onClick={startLogin}>Login</button>
        </div>
    )
}

function startLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
}

export default LoginPage;
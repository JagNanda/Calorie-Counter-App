import React from 'react';
import {firebase} from '../firebase/firebase';

function LoginPage() {
    return (
        <div className="login-layout">
            <div className="login-layout__box">
                <h1 className="login-layout__title">Calorie Counter</h1>
                <p className="login-layout__subtitle">Keep track of your daily meals and calories</p>
                <button className="btn btn--login" onClick={startLogin}>Login with Google</button>
            </div>
        </div>
    )
}

function startLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
}

export default LoginPage;
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { fetchMealsFirebase } from './actions/meals';
import {fetchMyFoods} from './actions/myFoods';
import {firebase} from './firebase/firebase';
import {history} from './routes/AppRouter';
import {login, logout} from './actions/auth';
import './firebase/firebase';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

ReactDOM.render(<p>...loading</p>, document.getElementById('app'));

const store = configureStore();
const app = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

let hasRendered = false;


firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.dispatch(login(user.uid));
        store.dispatch(fetchMealsFirebase()).then(() => {
            store.dispatch(fetchMyFoods()).then(() => {
                renderApp();
            });
        });
        if(history.location.pathname === '/') {
            history.push('dashboard');
        }
    }
    else {
        renderApp();
        store.dispatch(logout());
        history.push('/');
    }
})

function renderApp() {
    if (!hasRendered) {
        ReactDOM.render(app, document.getElementById('app'));
        hasRendered = true;
    }
}
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { fetchMealsFirebase } from './actions/meals';
import {fetchStartingMyFoods, fetchMyFoods} from './actions/myFoods';
import './firebase/firebase';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const store = configureStore();
const app = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(<p>...loading</p>, document.getElementById('app'));

store.dispatch(fetchMealsFirebase()).then(() => {
    store.dispatch(fetchMyFoods()).then(() => {
        ReactDOM.render(app, document.getElementById('app'));
    });
});
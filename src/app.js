import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const store = configureStore();
const app = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
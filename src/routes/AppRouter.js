import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Dashboard from '../components/Dashboard';
import AddMeals from '../components/AddMeals';
import NotFoundPage from '../components/NotFoundPage';
import MyFoods from '../components/MyFoods';
import LoginPage from '../components/LoginPage';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                    <PublicRoute path='/' component={LoginPage} exact={true}/>
                    <PrivateRoute path='/dashboard' component={Dashboard}/>
                    <PrivateRoute path='/AddMeals' component={AddMeals}/>
                    <PrivateRoute path='/MyFoods' component={MyFoods}/>
                    <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
)

export default AppRouter;
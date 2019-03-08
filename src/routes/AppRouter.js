import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import AddMeals from '../components/AddMeals';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import EditDayPage from '../components/EditDayPage';
import MyFoods from '../components/MyFoods';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                    <Route path='/' component={Dashboard} exact={true}/>
                    <Route path='/AddMeals' component={AddMeals}/>
                    <Route path='/MyFoods' component={MyFoods}/>
                    <Route path='/EditDayPage/:id' component={EditDayPage}/>
                    <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;
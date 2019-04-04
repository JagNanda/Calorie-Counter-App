import { createStore, combineReducers, applyMiddleware } from 'redux';
import mealReducer from '../reducers/meals';
import filterReducer from '../reducers/filter';
import myFoodsReducer from '../reducers/myFoods';
import authReducer from '../reducers/auth';
import thunk from 'redux-thunk';

function configureStore() {

    const store = createStore(
        combineReducers({
            meals: mealReducer,
            filter: filterReducer,
            myFoods: myFoodsReducer,
            auth: authReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
}

export default configureStore;
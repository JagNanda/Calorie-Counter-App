import { createStore, combineReducers, applyMiddleware } from 'redux';
import mealReducer from '../reducers/meals';
import filterReducer from '../reducers/filter';
import myFoodsReducer from '../reducers/myFoods';
import thunk from 'redux-thunk';

function configureStore() {

    const store = createStore(
        combineReducers({
            meals: mealReducer,
            filter: filterReducer,
            myFoods: myFoodsReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
}

export default configureStore;
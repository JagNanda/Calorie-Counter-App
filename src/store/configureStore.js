import { createStore, combineReducers } from 'redux';
import mealReducer from '../reducers/meals';
import filterReducer from '../reducers/filter';
import myFoodsReducer from '../reducers/myFoods';

function configureStore() {
    const store = createStore(combineReducers({
        meals: mealReducer,
        filter: filterReducer,
        myFoods: myFoodsReducer
    }));
    return store;
}

export default configureStore;
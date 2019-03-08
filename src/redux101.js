import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';
import moment from 'moment';

//Reducers needed: 
//1)Meal information - calories, macros, name of food, date eaten.
//2)Filter to organize food by date 

function addMeal({name, calories, protein, fat, carbs, dateAdded} = {}) {
    return {
        type: 'ADD_MEAL',
        meal: {  
            id: uuid(), 
            name,
            calories,
            protein,
            fat,
            carbs,
            dateAdded
        }
    }
}


function removeMeal(id) {
    return {
        type: 'REMOVE_MEAL',
        id
    }
}

const mealDefaultState = [];

function mealReducer(prevState = mealDefaultState, action) {
    switch(action.type) {
        case 'ADD_MEAL':
            return [...prevState, action.meal];
        case 'REMOVE_MEAL':
            return prevState.filter((meal) => meal.id !== action.id);
        default:
            return prevState;
    }
}


// -----------------------------------------
function setDate(searchDate) {
    return {
        type: "SET_DATE",
        searchDate
    }
}

const filterDefaultState = {
    searchDate: undefined
}

function filterReducer(prevState = filterDefaultState, action) {
    switch(action.type){
        case 'SET_DATE':
            return {...prevState, searchDate: action.searchDate}
        default:
            return prevState;
    }
}

function getVisibleMeals(meals, filter) {
    return meals.filter((meal) => {
        return (
            meal.dateAdded === filter.searchDate
        )
    });
}


//-------------------------------------------
const store = createStore(combineReducers({
    meals: mealReducer,
    filter: filterReducer
}));


store.dispatch(setDate(10000));
store.dispatch(addMeal({name: 'pasta', calories: 300, protein: 30, fat: 10, carbs: 100, dateAdded: 10000}));
store.dispatch(addMeal({name: 'pizza', calories: 10, protein: 30, fat: 10, carbs: 100, dateAdded: 10000}));
console.log(store.getState());
console.log(getVisibleMeals(store.getState().meals, store.getState().filter));
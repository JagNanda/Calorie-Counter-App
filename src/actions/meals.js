import uuid from 'uuid';
import { database } from '../firebase/firebase';

function addMeal(meal) {
    return {
        type: 'ADD_MEAL',
        meal
    }
}

function addMealFirebase(meal) {
    return function(dispatch) {
        const {mealName, calories, protein, fat, carbs, dateAdded} = meal;
        database.ref('meals').push({mealName, calories, protein, fat, carbs, dateAdded}).then((ref) => {
            dispatch(addMeal({
                id: ref.key,
                ...meal
            }));
        });
    }
}

function fetchMealsFirebase() {
    return function(dispatch) {
        const meals = [];
        return database.ref('meals').once('value').then((snapshot) => {
            snapshot.forEach((childSnap) => {
                meals.push({
                    id: childSnap.key,
                    ...childSnap.val()
                });
            })
            dispatch(setStartingMeals(meals));
        })
    }
    
}

//after fetching meals from firebase, this is called to set the meals for each date
function setStartingMeals(meals) {
    return {
        type: 'SET_STARTING_MEALS',
        meals
    }
}

function removeMealFirebase(id) {
    return function(dispatch) {
        database.ref(`meals/${id}`).remove();
        dispatch(removeMeal(id));
    }
}

function removeMeal(id) {
    return {
        type: 'REMOVE_MEAL',
        id
    }
}

export { addMealFirebase, fetchMealsFirebase, removeMealFirebase};
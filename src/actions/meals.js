import { database } from '../firebase/firebase';

function addMeal(meal) {
    return {
        type: 'ADD_MEAL',
        meal
    }
}

function addMealFirebase(meal) {
    return function(dispatch, getState) {
        const uid = getState().auth.uid;
        database.ref(`users/${uid}/meals`).push(meal).then((ref) => {
            dispatch(addMeal({
                id: ref.key,
                ...meal
            }));
        });
    }
}

function fetchMealsFirebase() {
    return function(dispatch,getState) {
        const meals = [];
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/meals`).once('value').then((snapshot) => {
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
    return function(dispatch,getState) {
        const uid = getState().auth.uid;
        database.ref(`users/${uid}/meals/${id}`).remove();
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
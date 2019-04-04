import { database } from '../firebase/firebase';

function addMyFood(meal) {
    return {
        type: 'ADD_MY_FOOD',
        meal
    }
}

function addMyFoodFirebase(meal) {
    return function(dispatch, getState) {
        const uid = getState().auth.uid;
        database.ref(`users/${uid}/myFoods`).push(meal).then((ref) => {
            dispatch(addMyFood({
                id: ref.key,
                ...meal
            }));
        });
    };
}

function fetchMyFoods() {
    return function(dispatch, getState) {
        const myFoods = [];
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/myFoods`).once('value').then((snapshot) => {
            snapshot.forEach((childSnap) => {
                myFoods.push({
                    id: childSnap.key,
                    ...childSnap.val()
                });
            });
            dispatch(setStartingMyFoods(myFoods));
        });
    };
}

function removeMyFood(id) {
    return {
        type: 'REMOVE_MY_FOOD',
        id
    }
}

function removeMyFoodFirebase(id){
    return function(dispatch, getState) {
        const uid = getState().auth.uid;
        database.ref(`users/${uid}/myFoods/${id}`).remove().then(() => {
            dispatch(removeMyFood(id));
        })
    }
}

//this is called by fetchMyFoods to set redux store
function setStartingMyFoods(myFoods) {
    return {
        type: 'SET_STARTING_MY_FOODS',
        myFoods
    }
}

export { addMyFoodFirebase, fetchMyFoods, removeMyFood, removeMyFoodFirebase };


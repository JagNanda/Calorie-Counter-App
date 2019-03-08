import uuid from 'uuid';

function addMeal({mealName, calories, protein, fat, carbs, dateAdded} = {}) {
    return {
        type: 'ADD_MEAL',
        meal: {  
            id: uuid(), 
            mealName,
            calories,
            protein,
            fat,
            carbs,
            dateAdded
        }
    }
}

function removeMeal({id}) {
    return {
        type: 'REMOVE_MEAL',
        id
    }
}

export { addMeal, removeMeal };
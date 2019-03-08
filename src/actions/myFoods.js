import uuid from 'uuid';

function addMyFood({mealName, calories, protein, fat, carbs, dateAdded} = {}) {
    return {
        type: 'ADD_MY_FOOD',
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

function removeMyFood({id}) {
    return {
        type: 'REMOVE_MY_FOOD',
        id
    }
}

export { addMyFood, removeMyFood };


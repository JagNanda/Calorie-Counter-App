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

export default mealReducer;
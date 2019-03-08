
const myFoodsDefaultState = [];

function myFoodsReducer(prevState = myFoodsDefaultState, action) {

    switch (action.type) {
        case 'ADD_MY_FOOD':
            return [...prevState, action.meal];
        case 'REMOVE_MY_FOOD':
            return prevState.filter((food) => food.id != action.id)
        default: 
            return prevState;
    }
}

export default myFoodsReducer;
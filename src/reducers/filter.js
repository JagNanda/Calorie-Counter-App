import moment from 'moment';

const filterDefaultState = {
    searchDate: moment(),
    showSelectMyFoodItem: false
}

export default function filterReducer(prevState = filterDefaultState, action) {
    switch(action.type){
        case 'SET_DATE':
            return {...prevState, searchDate: action.searchDate};
        case 'TOGGLE_SELECT_TRUE':
            return {...prevState, showSelectMyFoodItem: true};
        case 'TOGGLE_SELECT_FALSE':
            return {...prevState, showSelectMyFoodItem: false}
        default:
            return prevState;
    }
}

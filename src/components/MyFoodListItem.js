import React from 'react';
import {removeMyFood} from '../actions/myFoods';
import {connect} from 'react-redux';

function MyFoodListItem({id, mealName, calories, carbs, fat, protein, dispatch, showSelect, onSelect}) {
    return (
        <div>
            <p><b>{mealName}</b> calories: {calories} carbs: {carbs} fat: {fat} protein: {protein}</p>
            <button onClick={() => dispatch(removeMyFood({id}))}>Remove</button>
            {showSelect && <button onClick={onSelect}>Select</button>}
        </div>
    )
}

export default connect ()(MyFoodListItem);
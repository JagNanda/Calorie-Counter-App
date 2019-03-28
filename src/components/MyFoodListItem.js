import React from 'react';
import {removeMyFoodFirebase} from '../actions/myFoods';
import {connect} from 'react-redux';

function MyFoodListItem({id, mealName, calories, carbs, fat, protein, dispatch, showSelect, onSelect}) {
    return (
        <div>
            <p><b>{mealName}</b> calories: {calories} carbs: {carbs} fat: {fat} protein: {protein}</p>
            {showSelect ? <button onClick={onSelect}>Select</button> : <button onClick={() => dispatch(removeMyFoodFirebase(id))}>Remove</button>}
        </div>
    )
}

export default connect ()(MyFoodListItem);
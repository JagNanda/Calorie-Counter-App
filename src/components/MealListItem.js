import React from 'react';
import {removeMealFirebase} from '../actions/meals';
import { connect } from 'react-redux';

function MealListItem({mealName, calories, carbs, fat, protein, id, dispatch}) {
    return (
        <div>
            <p>{mealName} calories: {calories} carbs: {carbs} fat: {fat} protein: {protein}</p>
            <button onClick={() => dispatch(removeMealFirebase(id))}>Remove</button>
        </div>
    )
}

export default connect()(MealListItem);
import React from 'react';
import {removeMealFirebase} from '../actions/meals';
import { connect } from 'react-redux';

function MealListItem({mealName, calories, carbs, fat, protein, id, dispatch}) {
    return (
        <div className="meal-list-item__container">
            <div className="meal-list-item__header">
                <div className="meal-list-item__name">{mealName}</div>
                <div className="meal-list-item__calories">{calories}</div>
            </div>
            <div className="meal-list-item__macros">
                <span>Carbs: {carbs}</span> <span>Fat: {fat}</span> <span>Protein: {protein}</span>
            </div>
            <button className="btn btn--remove" onClick={() => dispatch(removeMealFirebase(id))}>Remove</button>
        </div>
    )
}

export default connect()(MealListItem);
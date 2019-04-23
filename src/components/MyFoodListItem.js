import React from 'react';
import {removeMyFoodFirebase} from '../actions/myFoods';
import {connect} from 'react-redux';

function MyFoodListItem({id, mealName, calories, carbs, fat, protein, dispatch, showSelect, onSelect}) {
    return (
        <div className="meal-list-item__container">
            <div className="meal-list-item__header">
                <div className="meal-list-item__name">{mealName}</div>
                <div className="meal-list-item__calories">{calories}</div>
            </div>
            <div className="meal-list-item__macros">
                <span>Carbs: {carbs}</span> <span>Fat: {fat}</span> <span>Protein: {protein}</span>
            </div>
            {showSelect ? <button className ='btn btn--select' onClick={onSelect}>Select</button> 
                : <button className="btn btn--remove" onClick={() => dispatch(removeMyFoodFirebase(id))}>Remove</button>}
        </div>
    )
}

export default connect ()(MyFoodListItem);
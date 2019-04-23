import React from 'react';
import { connect } from 'react-redux';
import MealListItem from './MealListItem';
import { getVisibleMeals } from '../selectors/meals';

function MealList(props) {
    return(
        <div className="meal-list">
            <div className="meal-list__header">
                <h2 className="meal-list__title">Meals Eaten</h2>
                <div className="meal-list-item__calories-label">Calories</div>
            </div>
            {props.meals < 1 && <div className="meal-list-item__container">No meals eaten</div>}
            {props.meals.map((meal) => (
                <MealListItem
                    {...meal}
                    key={meal.id}
                />    
            ))}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        meals: getVisibleMeals(state.meals, state.filter)
    }
}

export default connect(mapStateToProps)(MealList);


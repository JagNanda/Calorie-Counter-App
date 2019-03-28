import React from 'react';
import { connect } from 'react-redux';
import MealListItem from './MealListItem';
import { getVisibleMeals } from '../selectors/meals';

function MealList(props) {
    return(
        <div>
            <h3>Meals Eaten Today</h3>
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


import React from 'react';
import { connect } from 'react-redux';
import { getTotalMacrosForDay } from '../selectors/meals';

function MacroCountDay({totalMacros: {totalCalories, totalCarbs, totalFat, totalProtein}}) {
    return (
        <div>
            <h3>Total Macros Eaten for the Day: </h3>
            <h4>Calories: {totalCalories} Carbs: {totalCarbs} Fat: {totalFat} Protein: {totalProtein}</h4>

        </div>
    )
}

function mapStateToProps(state) {
    return {
        totalMacros: getTotalMacrosForDay(state.meals, state.filter)
    }
}

export default connect(mapStateToProps)(MacroCountDay)
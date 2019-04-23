import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { getTotalMacrosForDay } from '../selectors/meals';
import MealListFilter from './MealListFilter';

function MacroCountDay({totalMacros: {totalCalories, totalCarbs, totalFat, totalProtein}}) {
    return (
        <div className="page-header">
            <div className="content-container">
                <h3 className="page-header__title hide-on-mobile">Total Macros Eaten for the Day</h3>
                <h3 className="page-header__title hide-on-desktop">Total Macros Eaten</h3>
                <h4 className="page-header__sub-title">Calories: <span>{totalCalories}</span> Carbs: <span>{totalCarbs}</span> Fat: <span>{totalFat}</span> Protein: <span>{totalProtein}</span></h4>
                <div className="page-header__actions">
                    <div className="page-header__date-container">
                        <p className="page-header__date-label">Select a date:</p><MealListFilter/>
                    </div>
                    <Link className="btn btn--add-meal" to='/AddMeals'>Add a meal</Link>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        totalMacros: getTotalMacrosForDay(state.meals, state.filter)
    }
}

export default connect(mapStateToProps)(MacroCountDay)
import React from 'react';
import MealList from './MealList';
import MealListFilter from './MealListFilter';
import { Link } from 'react-router-dom';
import MacroCountDay from './MacroCountDay';

function Dashboard() {
    return (
        <div>
            <MealListFilter/>
            <Link to='/AddMeals'>Add a meal</Link>
            <MacroCountDay/>
            <MealList/>
        </div>
    );
}

export default Dashboard;
import React from 'react';
import MealList from './MealList';
import MacroCountDay from './MacroCountDay';

function Dashboard() {
    return (
        <div>
            <div className="page-header">
                <MacroCountDay/>
            </div>
            <div className="content-container">
                <MealList/>
            </div>
        </div>
    );
}

export default Dashboard;
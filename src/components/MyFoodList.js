import React from 'react';
import { connect } from 'react-redux';
import MyFoodListItem from './MyFoodListItem';
import { addMealFirebase } from '../actions/meals';
import { withRouter } from 'react-router-dom';

function MyFoodList(props) {
    return (
        <div className="meal-list">
            <div className="meal-list__header">
                <h2 className="meal-list__title">Saved Meals</h2>
                <div className="meal-list-item__calories-label">Calories</div>
            </div>
            {props.myFoods == 0 && <div className="meal-list-item__container">No meals saved</div>}
            {props.myFoods.map((myFood) => (
                <MyFoodListItem
                    {...myFood}
                    showSelect={props.showSelect}
                    key={myFood.id}
                    onSelect={() => {
                        //destrucuring to remove id
                        const {calories, fat, protein, carbs, mealName} = myFood;
                        const myFoodData = {calories, fat, protein, carbs, mealName}
                        myFoodData.dateAdded = props.date.valueOf();
                        props.dispatch(addMealFirebase(myFoodData));
                        props.history.push('/');
                    }}
                />
            ))}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        myFoods: state.myFoods,
        date: state.filter.searchDate,
        showSelect: state.filter.showSelectMyFoodItem
    }
}

export default withRouter(connect(mapStateToProps)(MyFoodList));
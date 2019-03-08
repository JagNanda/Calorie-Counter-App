import React from 'react';
import { connect } from 'react-redux';
import MyFoodListItem from './MyFoodListItem';
import { addMeal } from '../actions/meals';
import { withRouter } from 'react-router-dom';

function MyFoodList(props) {
    return (
        <div>
            <h3>Saved Meals</h3>
            {props.myFoods.map((myFood) => (
                <MyFoodListItem
                    {...myFood}
                    showSelect={props.showSelect}
                    key={myFood.id}
                    onSelect={() => {
                        props.dispatch(addMeal(myFood));
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
        showSelect: state.filter.showSelectMyFoodItem
    }
}

export default withRouter(connect(mapStateToProps)(MyFoodList));
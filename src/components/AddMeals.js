import React from 'react';
import { connect } from 'react-redux';
import MealForm from './MealForm';
import { addMeal } from '../actions/meals';
import { toggleShowSelectMyFoodItemTrue } from '../actions/filter';
import MyFoodList from './MyFoodList';


class AddMeals extends React.Component {
    
    componentDidMount() {
        this.props.dispatch(toggleShowSelectMyFoodItemTrue());
    }
    
    render() {
        return (
            <div>
                <h1>Add a Meal</h1>
                <MyFoodList/>
                <MealForm onSubmit={(meal) => {
                    this.props.dispatch(addMeal(meal));
                    this.props.history.push('/');
                }}/>
            </div>
        )
    }
}

export default connect()(AddMeals);
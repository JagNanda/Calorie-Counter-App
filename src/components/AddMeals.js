import React from 'react';
import { connect } from 'react-redux';
import MealForm from './MealForm';
import { addMealFirebase } from '../actions/meals';
import { toggleShowSelectMyFoodItemTrue } from '../actions/filter';
import MyFoodList from './MyFoodList';


class AddMeals extends React.Component {
    
    componentDidMount() {
        this.props.dispatch(toggleShowSelectMyFoodItemTrue());
    }
    
    render() {
        return (
           <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1>Add a Meal</h1>
                    </div>
                </div>
                    <div className="content-container">
                        <MyFoodList/>
                        <MealForm 
                            submitBtnText="Add a New Meal"
                            onSubmit={(meal) => {
                                this.props.dispatch(addMealFirebase(meal));
                                this.props.history.push('/');
                            }}
                        />
                    </div>
           </div>
        )
    }
}

export default connect()(AddMeals);
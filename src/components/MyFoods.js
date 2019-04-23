import React from 'react';
import MyFoodList from './MyFoodList';
import MealForm from './MealForm';
import {connect} from 'react-redux';
import {addMyFoodFirebase} from '../actions/myFoods';
import { toggleShowSelectMyFoodItemFalse } from '../actions/filter';


class MyFoods extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showForm: false
        }
        this.handleToggleForm = this.handleToggleForm.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(toggleShowSelectMyFoodItemFalse());
    }

    handleToggleForm() {
        this.setState((prevState) => ({
            showForm: !prevState.showForm
        }));
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">                        
                        <h1 className="page-header__title">My Foods</h1>
                        <button className="btn btn--add-meal" onClick={this.handleToggleForm}>Add a Favourite Meal</button>
                    </div>
                </div>
                <div className="content-container">
                    <div className={this.state.showForm ? '' : 'hidden'}>
                        <MealForm
                            onSubmit={(meal) => {
                                const {calories, carbs, fat, mealName, protein} = meal;
                                const mealData = {calories, carbs, fat, mealName, protein};
                                this.props.dispatch(addMyFoodFirebase(mealData));
                                this.handleToggleForm();
                            }}
                        />
                    </div>
                    <MyFoodList/>
                </div>
            </div>
        )
    }
}

export default connect()(MyFoods);
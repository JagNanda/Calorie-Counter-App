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
                <h1>My Foods</h1>
                <button onClick={this.handleToggleForm}>Add a Favourite Meal</button>
                <div className={this.state.showForm ? 'myFoods' : 'hidden'}>
                    <MealForm
                        onSubmit={(meal) => {
                            this.props.dispatch(addMyFoodFirebase(meal));
                            this.handleToggleForm();
                        }}
                    />
                </div>
                <MyFoodList/>
            </div>
        )
    }
}

export default connect()(MyFoods);
import React from 'react';
import {connect} from 'react-redux';

class MealForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mealName: '',
            calories: 0 ,
            fat: 0,
            protein: 0,
            carbs: 0,
            dateAdded: props.filter.searchDate,
            error: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleInputChange(e) {
        e.preventDefault();
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    submitForm(e) {
        e.preventDefault();
        if (this.state.calories > 0 && this.state.mealName) {
            this.props.onSubmit({
                mealName: this.state.mealName,
                calories: parseInt(this.state.calories),
                protein: parseInt(this.state.protein),
                fat: parseInt(this.state.fat),
                carbs: parseInt(this.state.carbs),
                dateAdded: this.state.dateAdded
            });
            this.setState({
                mealName: '',
                calories: 0,
                protein: 0,
                fat: 0,
                carbs: 0,
                error: ''
            })
        }
        else {
            this.setState({
                error: 'Meal name and calories are required fields.'
            })
        }
        
    }
    
    render() {
        return (
            <form onSubmit={this.submitForm}>
                Name of Meal:
                <input 
                    type="text" 
                    name="mealName" 
                    placeholder="Meal Name" 
                    value={this.state.mealName}
                    onChange={this.handleInputChange} 
                /><br/>
                Calories:
                <input 
                    type="number" 
                    name="calories"
                    value={this.state.calories}
                    onChange={this.handleInputChange}
                /><br/>
                Fat:
                <input
                    type="number"
                    name="fat"
                    placeholder='fat'
                    onChange={this.handleInputChange}
                    value={this.state.fat} 
                /><br/>
                Protein:
                <input 
                    type="number"
                    name="protein"
                    placeholder='protein'
                    value={this.state.protein}
                    onChange={this.handleInputChange}
                /><br/>
                Carbohydrates:
                <input 
                    type="number"
                    name="carbs"
                    placeholder='carbohydrates'
                    value={this.state.carbs}
                    onChange={this.handleInputChange}
                /><br/>
                <button>Add Meal</button>
                {this.state.error ? <h1>{this.state.error}</h1> : ''}
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        filter: state.filter
    }
}

export default connect (mapStateToProps)(MealForm);
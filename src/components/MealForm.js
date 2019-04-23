import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

class MealForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mealName: '',
            calories: '',
            fat: '',
            protein: '',
            carbs: '',
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
                dateAdded: moment(this.state.dateAdded).valueOf()
            });
            this.setState({
                mealName: '',
                calories: '',
                protein: '',
                fat: '',
                carbs: '',
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
            <form className="meal-form" onSubmit={this.submitForm}>
                <input 
                    type="text" 
                    className="text-input"
                    maxLength="20"
                    name="mealName" 
                    placeholder="Meal Name" 
                    value={this.state.mealName}
                    onChange={this.handleInputChange} 
                />
                <input 
                    type="text"
                    className="text-input"
                    maxLength="5"
                    name="calories"
                    placeholder="Calories"
                    value={this.state.calories}
                    onChange={this.handleInputChange}
                />
                <input
                    type="text"
                    maxLength="3"
                    className="text-input"
                    name="fat"
                    placeholder='Fat(g)'
                    onChange={this.handleInputChange}
                    value={this.state.fat} 
                />
                <input 
                    type="text"
                    maxLength="3"
                    className="text-input"
                    name="protein"
                    placeholder='Protein(g)'
                    value={this.state.protein}
                    onChange={this.handleInputChange}
                />
                <input 
                    type="text"
                    maxLength="3"
                    className="text-input"
                    name="carbs"
                    placeholder='Carbohydrates(g)'
                    value={this.state.carbs}
                    onChange={this.handleInputChange}
                />
                <button className="btn btn--add-meal">{this.props.submitBtnText ? this.props.submitBtnText : 'Add Meal'}</button>
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
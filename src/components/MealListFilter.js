import React from 'react';
import {connect} from 'react-redux';
import 'react-dates/initialize';
import { SingleDatePicker, isInclusivelyAfterDay } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import '../actions/filter';
import { setDate } from '../actions/filter';
import moment from 'moment';

class MealListFilter extends React.Component {

    constructor(props) {
        super(props);
        this.onDateChange = this.onDateChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.state = {
            focused: null
        }
    }

    onDateChange(date) {
        this.props.dispatch(setDate(date));
    }

    onFocusChange({focused}) {
        this.setState(() => ({
            focused
        }))
    }
    
    render() {
        return (
            <div>
                <SingleDatePicker
                    date={this.props.filterDate}
                    onDateChange={this.onDateChange}
                    focused={this.state.focused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    id="calendar"
                    isOutsideRange={(day) => isInclusivelyAfterDay(day, moment().add(1, 'days'))}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        filterDate: state.filter.searchDate
    }
}

export default connect(mapStateToProps)(MealListFilter);
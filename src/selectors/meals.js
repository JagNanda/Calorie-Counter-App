import moment from 'moment'

function getVisibleMeals(meals, filter) {
    return meals.filter((meal) => {
        return (
            moment(meal.dateAdded).isSame(filter.searchDate, 'day')
        )
    });
}

function getTotalMacrosForDay(meals, filter) {
    let totalCalories = 0;
    let totalCarbs = 0;
    let totalProtein = 0;
    let totalFat = 0;

    meals.filter((meal) => (moment(meal.dateAdded).isSame(filter.searchDate, 'day'))
    ).forEach((meal) => {
        totalCalories += meal.calories;
        totalCarbs += meal.carbs;
        totalProtein += meal.protein;
        totalFat += meal.fat;
    })

    return {
        totalCalories,
        totalCarbs,
        totalProtein,
        totalFat
    }
}

export { getVisibleMeals, getTotalMacrosForDay };
function setDate(searchDate) {
    return {
        type: "SET_DATE",
        searchDate
    }
}

function toggleShowSelectMyFoodItemTrue() {
    return {
        type: "TOGGLE_SELECT_TRUE"
    }
}

function toggleShowSelectMyFoodItemFalse() {
    return {
        type: "TOGGLE_SELECT_FALSE"
    }
}

export { setDate, toggleShowSelectMyFoodItemTrue, toggleShowSelectMyFoodItemFalse };
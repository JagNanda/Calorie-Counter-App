function authReducer(prevState = {}, action){
    switch(action.type) {
        case 'LOGIN':
            return {uid: action.uid};
        case 'LOGOUT':
            return {};
        default:
            return prevState;
    }
}

export default authReducer;
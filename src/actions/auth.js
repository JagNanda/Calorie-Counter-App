function login(uid) {
    return {
        type: 'LOGIN',
        uid
    }
}

function logout() {
    return {
        type: 'LOGOUT'
    }
}
export {login, logout};
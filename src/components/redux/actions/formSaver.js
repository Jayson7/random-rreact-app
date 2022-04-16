//  create login action from loginFormReducer
export const login = (username, password) => {
    return {
        type: 'LOGIN',
        username: username,
        password: password,
    }
}
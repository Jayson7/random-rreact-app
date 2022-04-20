//  create login action from loginFormReducer
export const register = (username, password, email, phone, full_name) => {
    return {
        type: 'REGISTER',
        username: username,
        password: password,
        email: email,
        phone: phone,
        full_name: full_name,
    }
}
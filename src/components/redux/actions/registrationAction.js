//  create login action from loginFormReducer
export const resgister = (username, password, email, full_name, phone) => {
    return {
        type: 'REGISTER',
        username: username,
        password: password,
        email: email,
        phone: phone,
        full_name: full_name,
    }
}
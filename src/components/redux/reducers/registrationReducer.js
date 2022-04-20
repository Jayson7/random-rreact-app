// create loginReducer from loginFormReducer
export default function RegFormReducer(state = {}, action) {
    switch (action.type) {
        case 'REGISTER':
            return {
                ...state,
                username: action.username,
                password: action.password,
                email: action.email,
                phone: action.phone,
                full_name: action.full_name,
            }

        default:
            return state
    }
}
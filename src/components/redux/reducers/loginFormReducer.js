// create loginReducer from loginFormReducer
export default function loginFormReducer(
    state = { username: 'Anonymous', password: '' },
    action,
) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                username: action.username,
                password: action.password,
            }

        default:
            return state
    }
}
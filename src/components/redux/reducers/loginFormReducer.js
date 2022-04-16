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
        case 'FORM_SAVER':
            return {
                ...state,
                [action.formName]: action.formData,
            }
        default:
            return state
    }
}
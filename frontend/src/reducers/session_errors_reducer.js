import {
    RECEIVE_SESSION_ERRORS,
    REMOVE_ERRORS
} from '../actions/session_actions';

const sessionErrorsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return Object.assign({}, oldState, { errors: action.errors });
        case REMOVE_ERRORS:
            return Object.assign({}, oldState, { errors: [] });
        default:
            return oldState;
    }
}

export default sessionErrorsReducer;
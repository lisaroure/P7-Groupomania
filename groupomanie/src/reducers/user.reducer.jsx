import {
    GET_USER,
    GET_ADMIN,
} from "../actions/user.actions"

const initialState = {}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return action.payload;

        case GET_ADMIN:
            return action.payload;

        default:
            return state;
    }
}
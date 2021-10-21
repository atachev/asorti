import Immutable from 'seamless-immutable';
import { ROLE } from '../../utils/roles';

// action types
import { INIT, LOGIN, LOGOUT } from './action-types';

export interface Action {
    type: any;
    payload: any;
}

const initialState = () => Immutable({
    init: false,
    user: {
        authenticated: true,
        username: "Bai ivan",
        role: ROLE.NoRole
    }
});

export default (state = initialState(), action: Action) => {
    switch (action.type) {
        case INIT: {
            return state.setIn(['init'], !state.init);
        }
        case LOGIN: {
            return state
                .setIn(['user', 'isAuth'], true)
                .setIn(['user', 'username'], 'TEST USER');
        }
        case LOGOUT: {
            return state
                .setIn(['user', 'isAuth'], false)
                .setIn(['user', 'username'], null);
        }
        default:
            break;
    }

    return state;
}
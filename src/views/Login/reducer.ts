import Immutable from 'seamless-immutable';

// action types
import { INIT } from './action-types';

interface Action {
    type: any;
    payload: any;
}

const initialState = () => Immutable({
    init: false
});

export default (state = initialState(), action: Action) => {
    switch (action.type) {
        case INIT: {
            return state.setIn(['init'], !state.init);
        }
        default:
            break;
    }

    return state;
}
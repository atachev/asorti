import { combineReducers, Reducer } from "redux";
import { ImmutableObject } from "seamless-immutable";
import { ROLE } from "../../utils/roles";
import LoginReducer from '../../views/Login/reducer';

interface UserState {
    authenticated: boolean;
    username: string;
    role: ROLE;
}

interface LoginState {
    init: boolean;
    user: UserState;
}

export interface State {
    login: ImmutableObject<LoginState>;
}

// Reducer<State> type
const rootReducer = (): any => combineReducers({
    login: LoginReducer
});

export const createRootReducer = rootReducer;
export default rootReducer;
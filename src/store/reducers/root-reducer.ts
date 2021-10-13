import { RouterState, connectRouter} from "connected-react-router";
import { History } from "history";
import { combineReducers, Reducer } from "redux";
import { ImmutableObject } from "seamless-immutable";
import LoginReducer from '../../views/Login/reducer';

export interface State {
    router: RouterState;
    login: ImmutableObject<any>;
}

// Reducer<State>
const rootReducer = (history: History): Reducer<any> => combineReducers({
    router: connectRouter(history),
    login: LoginReducer

});

export const createRootReducer = rootReducer;
export default rootReducer;
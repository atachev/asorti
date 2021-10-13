import {createSelector} from 'reselect';

import { State} from '../../store/reducers/root-reducer';

const getLogin = (state: State) => state.login;
const getInit = createSelector(getLogin, login => login.init);

export const LoginSelectors = {
    getInit
}